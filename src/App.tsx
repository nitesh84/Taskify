import React from 'react';
import {createBrowserRouter} from 'react-router-dom'
import MarketPage from './components/MarketPage';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div >  
    <Navbar/>
    <MarketPage/>
    <Footer/>
    </div>
  );
}

export const appRouter=createBrowserRouter([
  {
    path:"",
    element:<App/>
  },{
  path:"/test",
  element:<Logo/>
}])





export default App;
