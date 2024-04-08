import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import Details from "./Components/details";
import Form from "./Components/form";
import Menu from "./Components/menu";
import { useState } from "react";
function App() {
  const[clicked, setClicked] = useState(false);
  return (
       <div className="">
        <Navbar setClicked={setClicked} clicked={clicked}/>
        <Menu clicked={clicked}/>
        <Hero/>
        <Form/>
        <Info/>
        <Details/>
        <Footer/>
        </div> 
  );
}

export default App;
