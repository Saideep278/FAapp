import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Favorite from '@material-ui/icons/Favorite';

import memories from '../../images/memories.jpg';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';


const Navbar = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useNavigate()
    
    const classes = useStyles()
    
    
    

    useEffect(()=>{
      const token = user?.token

      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

      setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    const logout = ()=>{
      dispatch( { type:'LOGOUT' } )
      setUser(null)
      history('/')
      
    }

    return (
        <AppBar xs={8} sm={6} md={9} className={classes.appBar} position="static" color="inherit">
          
            <Link to = '/'  className={classes.brandContainer} >
              <img component={Link} to ="/" className={classes.image} src={memories} alt="icon" height="60" />
              <Typography  className={classes.heading} variant="h2" align="center">FoodMemories</Typography>
                
            </Link>
            

            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                  <div className={classes.profile}>
                    <Link to='/wishlist'  > <Favorite className={classes.fav} color="secondary"  fontSize="large"  /> </Link>
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6"> {user?.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
                  </div>
            ) : (
              <Button component={Link} to="/auth" variant="contained" color="primary">Sign In / Sign Up</Button>
            )}
          </Toolbar>
              
      </AppBar>
        
        
        
    )
}

export default Navbar;


//<Link to='/wishlist'> <BookmarkIcon fontSize="large"/> </Link>