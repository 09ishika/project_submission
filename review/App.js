import React,{useState, useEffect} from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
import PropagateLoader from 'react-spinners/PropagateLoader';


function App() {

  const[loading,setLoading]= useState(false);
  

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000);
  },[])
  return (
    <div className="App">
     {
       loading ? <PropagateLoader color={"#3d2514"} Loading={loading}  size={40}/>
       :
       <>
       <Navbar/>
       <Header/>
       <Product/>
       <About/>
       <Contact/>
       
       </>
     }
    </div>
  );
}
export default App;