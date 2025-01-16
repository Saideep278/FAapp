import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper, Typography, ButtonBase } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link,useNavigate, useLocation } from 'react-router-dom';
import {getPostsBySearch} from '../../actions/posts'
import Posts from '../Posts/Posts';

import useStyles from './styles';

const Kukat = () => {
  
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const search=""
  const tags=["Kukatpally","kukatpally","kukatpalli","Kukatpalli"]
  const history = useNavigate();

  const searchPost = () => {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      console.log(tags);
      console.log(search);
      history(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
     
  };

  searchPost()

  return (
    <Grow in>
      <Container maxWidth="xl">
      <Typography variant='h3' > Receipes You May Love In Kukatpally.. </Typography>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>

          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
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

export default Kukat;