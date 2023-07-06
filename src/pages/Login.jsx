import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Typography, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            Copyright © All right reserved 2023
        </Typography>
    );
}


const defaultTheme = createTheme();

const Login = () => {
    const navigate = useNavigate()

    //TODO: [1] 로그인 이메일, 비밀번호가 맞다면 sessionStorage에 저장
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        if( data.get('email') === 'test@test.com' && data.get('password') === 'test'){
            window.sessionStorage.setItem('email', data.get('email'))
            window.sessionStorage.setItem('password', data.get('password'))
            navigate('/')
        }else {
            alert('이메일 또는 비밀번호가 틀렸습니다')
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">Sign in</Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">Forgot password?</Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">Don't have an account? Sign Up</Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Login;