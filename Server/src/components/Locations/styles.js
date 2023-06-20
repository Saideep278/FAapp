import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  ending:{
    backgroundColor:'#372948',
    color:'white',
    height:'350px',
    marginTop:'20px',
   
  },
  dept:{
    backgroundColor:'#372948',
    color:'white',
    height:'350px',
    marginTop:'20px',
   
  },
  quote:{
    marginLeft:'350px',
    paddingTop:'20px',
    fontSize:'40px',
  },
  lii:{
    textDecoration:'none',
    color: 'white',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));