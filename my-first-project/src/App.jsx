import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Signup from './components/Signup';
import Data from './components/Data';
import ThemeContext from './context/ThemeContext';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom';


export default function App() {
  const[data,setData] = useState([]);
  const[state,setState] = useState(false);
  function saveData(d){
    setData([...data,d])
  }
  let online = false;
  return (
    <div>
     <ThemeContext>
     <button id={online ? 'theme' : 'darktheme'}
     onClick={() => setState(!state)}>{!online ? 'theme' : 'hide'}</button>
     {state && <div>
      <Register getData={saveData}/>
      {/* <Signup/> */}
      <Data data={data}/>
      </div>}
     </ThemeContext>
    </div>
  )
}
