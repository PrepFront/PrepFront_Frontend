import { Box, Stack } from "@mui/material";
import { Cards } from "../../components/Cards";
import SampleImage from '../../public/SampleImage.jpg'

export default function (props) {
    return (
        <Stack
            flex={1}
            paddingX={5}
            overflow='scroll'
            height={'calc(100vh - 117.5px)'}
            spacing={2}
        >
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </Stack>
    )
}