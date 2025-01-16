import { Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from './styles';


const About = () => {
    const classes = useStyles();
    return(
        <Container  >
            <Paper className={classes.paper}  elevation={6} >
            <Typography variant='h3' >About</Typography><br/>
            <Typography className={classes.pp} variant='h6' >
                Food Advisor helps the people to know the famous and popular food items. based on the user comments
                and likes to food posts. People who are strange to particular area then they know popular receipes 
                by exploring this website.<br></br>
                The users can create their own wishlist only after logged in. The logged user can like and comment 
                other users posts. Food Advisor is user friendly website, user can search based on thier intrested 
                locations or receipes.<br></br>
                Users can only delete or update their own posts.
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

export default About