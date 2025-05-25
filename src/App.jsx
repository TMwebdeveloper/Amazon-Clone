import { useState } from 'react'
import "./App.css"
import "./index.css"
import Header from './Components/Header/Header'; 
import Carousel from "./Components/Carousel/Carousel"
import Category from './Components/Category/Category';
import Product from './Components/Product/Product';
import Routing from "./Router.jsx";
import LayOut from './Components/LayOut/LayOut.jsx';




function App() {
  
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      <Product />
      <Routing />
      {/* <LayOut/> */}
    </div>
  );
}

export default App
