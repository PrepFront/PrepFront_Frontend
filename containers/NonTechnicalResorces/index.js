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
                paddingX={5}
            >
                {
                    techQuery.data?.data.map((obj,index)=>(
                        <Cards image={obj.image} title={obj.title} key={index} description={obj.description} />
                    ))
                }
            </Stack>
        </WaitForData>
    )
}