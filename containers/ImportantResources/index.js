import { Stack } from "@mui/material";
import { useQuery } from "react-query";
import { Cards } from "../../components/Cards";
import WaitForData from "../../components/WaitForData";
import { getInitResource } from "../../utils/services/init_resource";

export default function (props) {

    const techQuery = useQuery({
        queryKey: ["important"],
        queryFn: getInitResource,
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