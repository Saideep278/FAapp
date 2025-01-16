import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector, useStore } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
import { useState } from 'react';

const Posts = ({ setCurrentId }) => {
  const  postsdata = useSelector((state) => state.wishlist )
  const postst = postsdata.wishlist
  const posts = postst[postst.length-1]


  
  const classes = useStyles();

  //if (!posts?.length && !isLoading) return 'No posts';

  return (
    
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid> 
        ))}
      </Grid>
    
  );
};

export default Posts;