import React from 'react'
import { BrowserRouter as Router, Routes, Outlet, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/Navbar';

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
  return (
    <div>
      <h1>NotFound</h1>
      <p>Sorry your page was not found</p>
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

