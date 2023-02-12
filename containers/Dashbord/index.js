import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { AppBar, Box, Grid, IconButton, Stack, Toolbar, Tooltip } from "@mui/material";
import Router from "next/router";
import { toast, ToastContainer } from "react-toast";
import COLOR from "../../constants/Colors";
import useTokenState from "../../custom-hooks/userHooks/useTokenState";


export default function ({ user }) {

    console.log(user)

    return (
        <Box
            width={'100%'}
            height={'100vh'}
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Stack spacing={0} width={900}>
                <AboveBar name={user.full_name} />
                <Card details={user} />
            </Stack>
            <ToastContainer />
        </Box>
    )
}

function AboveBar({
    name,
}) {
    const { DeleteToken } = useTokenState()
    return (
        <AppBar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            boxShadow: 0,
            flexDirection: 'row',
            alignItems: 'center',
            color: COLOR.accent,
            paddingLeft: 2,
            paddingRight: 2,
            marginBottom: 2
        }} color="transparent" position="static" width='100%'>
            <span className="text-2xl font-semibold" style={{ color: 'gray' }}>
                Hello,
                <span className="text-3xl font-bold" style={{ color: COLOR.accent }}> {name} </span>
            </span>
            <Tooltip title='Logout'>
                <IconButton
                    edge='end'
                    color="inherit"
                    onClick={async () => {
                        DeleteToken()
                        toast.info('you are now logged out')
                        Router.push('/dashboard/login')
                    }}
                >
                    <LogoutRoundedIcon />
                </IconButton>
            </Tooltip>
        </AppBar>
    )
}

function Card({ details: { college, qualification, email } }) {
    return (
        <Box width={'100%'} height={500} backgroundColor={'white'} borderRadius={5} padding={10} boxShadow='0px 0px 10px rgba(0, 0, 0, 0.05)'>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <InfoCard label='College' text={college} />
                </Grid>
                <Grid xs={6}>
                    <InfoCard label='Mobile' text={'+91 9583985395'} />
                </Grid>
                <Grid xs={6}>
                    <InfoCard label={'Qualification'} text={qualification} />
                </Grid>
                <Grid xs={6}>
                    <InfoCard label={'Email'} text={email} />
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
