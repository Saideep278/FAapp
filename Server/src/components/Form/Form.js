import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom'

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const history = useNavigate()
  const [postData, setPostData] = useState({ title: '', message: '',uid:'', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  var userid=""
  if (user?.result._id) {
    userid = user?.result._id;
  }
  else{
    userid = (user?.result.googleId);
  }
  useEffect(() => {
    if (post) setPostData(post);
    
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '',uid:'', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(postData.title === "" || postData.tags === "" ){
        alert("please enter the required details")
    }
    else{
      if (currentId === 0) {
        dispatch(createPost({ ...postData,uid:userid, name: user?.result?.name },history));
        clear();
      } else {
        dispatch(updatePost(currentId, { ...postData,uid:userid, name: user?.result?.name }));
        clear();
      }
    }

  };

  if (!user?.result?.name) {
    return (
      <Paper elevation={6} className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories and to add into wishlist.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper} elevation={3}  >
      
      <form autoComplete="off" validate ="true"className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}  >
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="title" 
        required 
        variant="outlined"
        label="Title"
        fullWidth
        value={postData.title} 
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />

        <TextField name="message" variant="outlined" required label="Location" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" required variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;