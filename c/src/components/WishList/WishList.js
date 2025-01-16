import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper, Typography, ButtonBase } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate, useLocation } from 'react-router-dom';
import {getPostsByWishLst} from '../../actions/posts'
import PostsW from '../Posts/Posts2';
import useStyles from './styles';

const WishList = () => {
  
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    dispatch(getPostsByWishLst((user?.result?.googleId  || user?.result?._id )))
  },[dispatch])
  
 
  
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Typography variant='h2' >Wishlist</Typography>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>

          <Grid item xs={12} sm={6} md={9}>
            <PostsW setCurrentId={setCurrentId} />
          </Grid>
        </Grid>

        

        <Grid item>

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
          
        </Grid>
      </Container>
      
    </Grow>
  );
};

export default WishList;