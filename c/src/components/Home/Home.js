import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper, Typography, ButtonBase } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { fetchByLoc, getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination/Pagination';
import useStyles from './styles';
import './styles.css'
import gachibowli from '../../images/memories.jpg';
import secbd from '../../images/secbd.jpg';
import kukat from '../../images/kukat.jpg';
import { useEffect } from 'react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useNavigate();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));

      history(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history('/');
      console.log("hh");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);


  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));




  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>

          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>

        <Grid item >
          <Paper className={classes.dept} >
            <ul className='dept'  >
              <li className='locations' > <Link to='/gachibowli'  ><img className='image' src={gachibowli} alt="icon" height="200" /></Link> </li>
              <li className='locations' > <Link to='/secundrabad'><img className='image' src={secbd} alt="icon" height="200" /></Link> </li>
              <li className='locations' > <Link to='/kukatpally'><img className='image' src={kukat} alt="icon" height="200" /></Link> </li>
            </ul>
            <ul className='dept2'>
              <li> Gachibowli </li>
              <li> Secundrabad </li>
              <li> Kukatpally </li>
            </ul>
          </Paper>
        </Grid>

        <Grid item>

          <Paper className={classes.ending} >

            <Typography className={classes.quote} >EXPLORE THE EXPERIENCE</Typography>

            <ul className='ulending' >
              <li >
                <Link to='/' className={classes.lii} >Home</Link>
              </li>
              <li>
                <Link to='/help' className={classes.lii} >Help</Link>
              </li>
              <li>
                <Link to='/about' className={classes.lii} >About</Link>
              </li>
              <li>
                <Link to='/contact' className={classes.lii} >Contact</Link>
              </li>
            </ul>
            <h3 className='copyrights' >Copyright © FoodMemories All rights reserved.</h3>
          </Paper>

        </Grid>
      </Container>

    </Grow>
  );
};

export default Home;