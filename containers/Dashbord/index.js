import { Settings } from "@mui/icons-material";
import { AppBar, Box, Grid, IconButton, Stack, Toolbar } from "@mui/material";
import COLOR from "../../constants/Colors";

const DETAILS = {
    College: 'ABC College',
    Mobile: '988983498',
    Qualification: 'BTech IT',
    Email: 'test@test.com'
}

export default function (props) {
    return (
        <Box
            width={'100%'}
            height={'100vh'}
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Stack spacing={0} width={900}>
                <AboveBar name={'JP Morgan'} />
                <Card details={DETAILS} />
            </Stack>
        </Box>
    )
}

function AboveBar({
    name,
}) {
    return (
        <AppBar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            boxShadow: 0,
            flexDirection: 'row',
            alignItems: 'center',
            color: COLOR.accent,
            paddingLeft: 2
        }} color="transparent" position="static" width='100%'>
            <span className="text-2xl font-semibold" style={{ color: 'gray' }}>
                Hello,
                <span className="text-3xl font-bold" style={{ color: COLOR.accent }}> {name} </span>
            </span>
            <Toolbar>
                <IconButton
                    edge='end'
                    color="inherit"
                >
                    <Settings />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

function Card({ details }){
    return (
        <Box width={'100%'} height={500} backgroundColor={'white'} borderRadius={5} padding={10} boxShadow='0px 0px 10px rgba(0, 0, 0, 0.05)'>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <InfoCard label='College' text={details.College} />
                </Grid>
                <Grid xs={6}>
                    <InfoCard label='Mobile' text={details.Mobile} />
                </Grid>
                <Grid xs={6}>
                    <InfoCard label={'Qualification'} text={details.Qualification} />
                </Grid>
                <Grid xs={6}>
                    <InfoCard label={'Email'} text={details.Email} />
                </Grid>
            </Grid>
        </Box>
    )
}

function InfoCard({ label, text }) {
    return (
        <Box display={'flex'} margin={1} borderRadius={2} sx={{
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)'
        }}>
            <Box borderRadius={2} fontWeight='600' width={'40%'} fontSize={15} paddingY={1} backgroundColor={COLOR.grayBack} textAlign='center' color={COLOR.grayText}>
                {label}
            </Box>
            <Box borderRadius={2} paddingLeft={1} paddingY={1} textOverflow='ellipsis'>
                {text}
            </Box>
        </Box>
    )
}
