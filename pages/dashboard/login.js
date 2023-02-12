import * as React from 'react';
import { useState, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import NoSSR from 'react-no-ssr'
import API_CLIENT from '../../utils/api'
import loginImg from '../../assets/login.svg';
import Image from 'next/image';
import LINK from "../../constants/Backend_links"
import { useRouter } from 'next/router';
import Loader from '../../components/loader';
import useTokenState from '../../custom-hooks/userHooks/useTokenState';
import { toast, ToastContainer } from 'react-toast'
import Head from 'next/head';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="">
                PrepFront
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {

    const { UpdateToken } = useTokenState()
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const emailRef = useRef()
    const passRef = useRef()

    const handleSubmit = async () => {
        const email = emailRef.current.value;
        const password = passRef.current.value;
        setLoading(true)
        try {
            const { data } = await API_CLIENT.post(LINK.ROUTES.USER.LOGIN, { email, password });
            UpdateToken(data)
            await router.push('/dashboard')
        }
        catch (e) {
            console.log(e.message)
        }
        setLoading(false)
    };

    if (loading) {
        return <Loader message={'Redirecting you to Dashbaord'} />
    }

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Your pathway to successful career🚀" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <NoSSR>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Image src={loginImg} width={800} height={800} alt='login image'></Image>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: '#686FC8' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    inputRef={emailRef}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    inputRef={passRef}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleSubmit}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>
                    </Grid>
                    <ToastContainer />
                </Grid>
            </NoSSR>
        </>
    );
}