import { Stack } from "@mui/material";
import { useQuery } from "react-query";
import { Cards } from "../../components/Cards";
import WaitForData from "../../components/WaitForData";
import { getTechResources } from "../../utils/services/tech_resource";

export default function (props) {

    const techQuery = useQuery({
        queryKey: ["technical"],
        queryFn: getTechResources,
        staleTime: 1000 * 20 * 60 // 20 min
    })

    return (
        <WaitForData objects={[techQuery]}>
            <Stack
                flex={1}
                paddingX={5}
                flexGrow={1}
                spacing={2}
                sx={{
                    overflowY:'scroll'
                }}
            >
                {
                    techQuery.data?.data.map((obj, index) => (
                        <Cards title={obj.title} key={index} description={obj.description} />
                    ))
                }
                {
                    techQuery.data?.data.map((obj, index) => (
                        <Cards title={obj.title} key={index} description={obj.description} />
                    ))
                }
                {
                    techQuery.data?.data.map((obj, index) => (
                        <Cards title={obj.title} key={index} description={obj.description} />
                    ))
                }
                {
                    techQuery.data?.data.map((obj, index) => (
                        <Cards title={obj.title} key={index} description={obj.description} />
                    ))
                }
            </Stack>
        </WaitForData>
    )
}