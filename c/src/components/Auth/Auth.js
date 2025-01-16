import { Avatar, Container, Paper, Typography, Grid, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from './styles'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from './Input';
import { GoogleLogin } from 'react-google-login'
import Icon from './icon';
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { signin, signup } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const Auth = () => {
    const state = null
    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const [isSignup, setIsSignup] = useState(false);

    const [formData, setFormData] = useState(initialState)



    const dispatch = useDispatch()

    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history))
        }

        console.log(formData);

    }

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId
        try {
            dispatch({ type: 'AUTH', data: { result, token } })

            history('/')
        } catch (error) {
            console.log(error);
        }
    };
    /*
        In react-router-dom v6 useHistory() is replaced by useNavigate().
    
    You can use:
    
    import { useNavigate } from 'react-router-dom';
    const navigate = useNavigate();
    navigate('/home');
    */


    const googleError = (error) => {
        console.log(error);
    }
    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} >
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" >
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}

                    </Grid>



                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>

                    <GoogleLogin
                        clientId="549810208246-c5d69dpunb3mquc2at2r9i4c292pv61q.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Sign In With Google
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"

                    />

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Link to='/resetpwd' className={classes.forgot}  > <Typography variant="h6" >Forgot Password?</Typography> </Link>
                        </Grid>
                    </Grid>


                </form>

            </Paper>



        </Container>




    )
}

export default Auth