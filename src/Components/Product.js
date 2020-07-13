import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      maxWidth: 1000,
      margin: '0 auto',
      marginTop: 50
      
    },
    paper: {
      padding: theme.spacing(3),
      
      color:'#7659ff',
      backgroundColor: "#f5f5f5",
      textalign: 'center',
      width: '300px',
      boxshadow:'0 0 10px #463636',
      margin: '10px',
      display: 'inline-block',
    //   display: 'flex',
    //   flexwrap: 'wrap',
      // podisplay: flex;
  
 
     
      // backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        transform: 'scale(1.1)',
        color:'white',
        backgroundColor: "#7659ff"
    }
      //   backgroundColor: fade(theme.palette.common.white, 0.25),
      // color: theme.palette.text.secondary,
    },
   
    title:{
      color:'white',
      textTransform:"uppercase"
    }
  }));
  
function Product() {
    const classes = useStyles();
    return (
        
        <div>
           
           
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return (
                        
                        <Link key={keyName} 
                            className="link" 
                            to={`/product/${keyName}`}>
                                 <Paper  className={classes.paper} 
              elevation={4}>
                                <h4>{shoe.name}</h4>
                                <img src={shoe.img} height={250} alt="shoe" />
                  </Paper>
                    </Link>)
                    
                })}
                
                
        </div>
    );
}

export default Product;