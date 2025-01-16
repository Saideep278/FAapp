import { Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from './styles';


const Contact = () => {
    const classes=useStyles();
    return(
        <Container  >
            <Paper className={classes.paper}  elevation={6} >
            <Typography variant='h3' >Contact</Typography><br></br>
            <Typography variant="h5">Saideep</Typography>
            <Typography className={classes.pp} variant='h6' >
                B.E in Information Technology<br></br>
                ph no: 99XXXXXXXX<br></br>
                email: XXXX@gmail.com
            </Typography><br></br>
            <Typography variant="h5">Sai Sri Harsha</Typography>
            <Typography className={classes.pp} variant='h6' >
                B.E in Information Technology<br></br>
                ph no: 89XXXXXXXX<br></br>
                email: XXXX@gmail.com
            </Typography><br></br>
            <Typography variant="h5">Ramavath</Typography>
            <Typography className={classes.pp} variant='h6' >
                B.E in Information Technology<br></br>
                ph no: 88XXXXXXXX<br></br>
                email: XXXX@gmail.com
            </Typography>
        </Paper>

        <Paper className={classes.ending} >

          <Typography className={classes.quote} >EXPLORE THE EXPERIENCE</Typography>

          <ul className='ulending' >
            <li >
            <Link to = '/' className={classes.lii} >Home</Link>
            </li>
            <li>
            <Link to = '/help' className={classes.lii} >Help</Link>
            </li>
            <li>
            <Link to = '/about' className={classes.lii} >About</Link>
            </li>
            <li>
            <Link to = '/contact' className={classes.lii} >Contact</Link>
            </li>
          </ul>
            <h3 className='copyrights' >Copyright © FoodMemories All rights reserved.</h3>
          </Paper>

        </Container>
    )
}

export default Contact