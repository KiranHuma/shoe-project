import React from 'react'
import { BrowserRouter as Router, Routes, Outlet, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NavBar from './Components/Navbar';

const useStyles = makeStyles((theme) => ({
 
  
  paper: {

    textAlign: 'center',
    width: '400px',
    height: '500px',
    color:'#7659ff',
  
    
   
    boxshadow:'0 0 10px #463636',
    marginLeft: '450px',
    marginTop: '130px',

    // display: 'inline-block',
    // display: 'inline-block',
  //   display: 'flex',
  //   flexwrap: 'wrap',
    // podisplay: flex;


   
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      transform: 'scale(1.1)',
      color:'red',
    }
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // color: theme.palette.text.secondary,
  },
  title:{
    color:'white',
    textTransform:"uppercase"
  }
}));
const RouteConfig = () => {
  
  return (
    <Router>
   {/* <NavBar/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="launch" element={<Launch />}>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductItem />} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/product/:id" element={<ProductItem />} />

    </Routes>
  </Router>
  )
}
function NotFound() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.paper} >The new designs are coming soon
      <h2>Keep visiting our website</h2>
      </h1>
      
      <Outlet />
    </div>
  )
}
function Launch() {
  return (
    <div>
    
      <Outlet />
    </div>
  )
}
export default RouteConfig

