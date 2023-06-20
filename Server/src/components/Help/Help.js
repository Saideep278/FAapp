import { Container, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from './styles';


const Help = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes=useStyles();
    return(
        <Container >
            <h1>Hey {user?.result.name} !  </h1>
            <Paper className={classes.paper}  elevation={6} >
            <Typography variant='h3' >Need Help?</Typography>
            <Typography className={classes.pp} variant='h6' ><br/>
                <b>How to create a Post ?</b><br/>
                user can only create posts after log in. The Title, location, tags are reuired for post creation.
                <br/><br/>
                <b>How to interact with others Posts?</b><br/>
                user can like, comment on their own posts as well as others posts and also they can add to their wishlist after logged in.
                <br/><br/>
                <b>How to add posts to Wishlist?</b><br/>
                To add posts to wishlist user must had logged in. By click on love symbol of post it is added to wishlist.
                To watch the wishlist, click on love symbol which is on navigation bar.
                <br/><br/>
                <b>Why my account is always logging out?</b><br/>
                usr can only stay logged in till 1 hour after user need to to loggin again. 
            
            </Typography>
            <Typography className={classes.pp} variant='h6' ><br></br>
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

export default Help