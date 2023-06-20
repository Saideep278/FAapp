import { Button, Container, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {resetpwdaction} from '../../actions/auth.js'
import useStyles from './styles';
import memories from '../../images/memories.jpg';


const Reset = () =>{
    const classes = useStyles();
    const [email,setemail] = useState("")
    const [b,setb] = useState(false)
    const [pwd,setpwd] = useState("")
    const dispatch = useDispatch()
    const history = useNavigate()
    
    const handlereset = () =>{
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;


        const rval = regexExp.test(email); 
        if (rval) {
            setb(true)
        } else {
            alert("Please enter the valid email address")
        }
        
    }
    const handlereset2 = (e) =>{
        e.preventDefault()
        setpwd("")
        dispatch(resetpwdaction(email,pwd,history))
    }

    return(
        <div className={classes.maindiv} >
            { !b ? (
            <Container className={classes.cont} >
            <Paper elevation={6} >
                <Typography className={classes.label} variant="h4" >Please enter your email :</Typography>
                <form  >
                    <TextField className={classes.input} required validate="true" minRows={4} fullWidth variant="outlined" label="Email" type='email' value={email} onChange={(e) => setemail(e.target.value) } /> 
                    <Button className={classes.inputb} disabled={!email.length}  color="primary" variant="contained" onClick={handlereset} >Submit</Button>
            
                </form>

            </Paper>
        </Container>
        ):(
            <Container className={classes.cont} > 
            <Paper elevation={6} >
                <Typography className={classes.label} variant="h4" >Please enter new password :</Typography>
                <form  >
                    <TextField type='password' className={classes.input} required validate="true" minRows={4} fullWidth variant="outlined" label="New Paasword"  value={pwd} onChange={(e) => setpwd(e.target.value) } /> 
                    <Button className={classes.inputb} disabled={!email.length}  color="primary" variant="contained" onClick={handlereset2} >Submit</Button>
            
                </form>

            </Paper>
        </Container>
        )}

            
        </div>
        
    )
}

export default Reset;