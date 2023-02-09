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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import API_CLIENT from '../../utils/api'
import loginImg from '../../assets/login.svg';
import Image from 'next/image';
import LINK from "../../constants/Backend_links"
import NamesForKeys from '../../constants/NamesForKeys';
import localStorage from '../../utils/native/local-storage';
import useUserState from '../../custom-hooks/userHooks/useUserState';
import { useRouter } from 'next/router';


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

const theme = createTheme();

export default function login() {

    const router = useRouter()

    const [msg,setMsg] =useState('');
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    
    const getEmailData = (e)=>{
        setEmail(e.target.value);
    }

    const getPwdData = (e)=>{
        setPwd(e.target.value);
    }


    const handleSubmit = async (event) => {

        event.preventDefault();

        const uid = email;
        const password= pwd;

        console.log({email:uid , password:password})

        try{
            const res = await API_CLIENT.post(LINK.ROUTES.USER.LOGIN,{email:uid , password:password});
            console.log(res.data);
            localStorage.setItem(NamesForKeys.TOKENS_KEY,res.data)
            router.push('/dashboard')
        }
        catch(e){
            console.log('Error in Login Call ', e.message);
        }

    };

    return (
        <ThemeProvider theme={theme}>
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
                        display:'flex',
                        justifyContent:'center',
                    }}
                >
                    <Image  src={loginImg} width={800} height={800}></Image>
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
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={getEmailData}
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
                                onChange={getPwdData}
                            />
                            {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                sx={{ mt: 3, mb: 2}}
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
            </Grid>
        </ThemeProvider>
    );
}