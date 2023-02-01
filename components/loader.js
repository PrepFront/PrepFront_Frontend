import { Box, Typography } from "@mui/material"
import { PuffLoader } from "react-spinners"
import COLOR from "../constants/Colors"
const Loader = ({ message }) => {

    return (
        <Box
            flex={1}
            flexDirection='column'
            display='flex'
            backgroundColor={COLOR.background}
            height={'100vh'}
            width={'100%'}
            justifyContent='center'
            alignItems='center'
            position='absolute'
            top={0}
            left={0}
            zIndex={1000}
        >
            <PuffLoader
                loading={true}
                color={COLOR.text}
            />
            <Typography paddingTop={2} fontWeight='bold' color={COLOR.grayText} >{message}</Typography>
        </Box>
    )
}

export default Loader