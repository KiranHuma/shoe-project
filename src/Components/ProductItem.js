import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';




const useStyles = makeStyles((theme) => ({
 
  
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    width: '400px',
    height: '500px',
    color:'#7659ff',
    backgroundColor: "#f5f5f5",
    
   
    boxshadow:'0 0 10px #463636',
    marginLeft: '450px',
    marginTop: '130px',
    marginBottom:'80px',
    // display: 'inline-block',
    // display: 'inline-block',
  //   display: 'flex',
  //   flexwrap: 'wrap',
    // podisplay: flex;


   
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      transform: 'scale(1.1)',
      color:'white',
      backgroundColor:'#7659ff',}
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // color: theme.palette.text.secondary,
  },
  title:{
    color:'white',
    textTransform:"uppercase"
  }
}));


 function ProductItem() {
  const classes = useStyles();
  const { id } = useParams();
  const shoe = Shoes[id];
  
  
  if (!shoe) {
    return <h2>Not found</h2>
  }
 

  return (
    <div>
            {/* <h1>Welcome to Product Item</h1> */}
            <div>
            <Paper  className={classes.paper} 
              elevation={2}>
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={400} width={500} alt="shoe" />
                </Paper>
            </div>
        </div>
    );
}

  

export default ProductItem;