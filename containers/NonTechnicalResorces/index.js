import { Stack } from "@mui/material";
import { useQuery } from "react-query";
import { Cards } from "../../components/Cards";
import WaitForData from "../../components/WaitForData";
import { getNonTechResources } from "../../utils/services/non_tech_skill";

export default function (props) {

    const techQuery = useQuery({
        queryKey: ["nontechnical"],
        queryFn: getNonTechResources,
        staleTime: 1000*20*60 // 20 min
    })

    return (
        <WaitForData objects={[techQuery]}>
            <Stack
                flex={1}
                paddingX={5}
                sx={{
                    overflowY:'scroll'
                }}
                height={'100%'}
                spacing={2}
            >
                {
                    techQuery.data?.data.map((obj,index)=>(
                        <Cards title={obj.title} key={index} description={obj.description} />
                    ))
                }
            </Stack>
        </WaitForData>
    )
}