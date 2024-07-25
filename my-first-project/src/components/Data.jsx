import React, { useContext } from 'react';
import './data.css';
import { Theme } from '../context/ThemeContext';


export default function Data(props) {
  const{color,setColor,backgroundColor,setBackgroundColor} = useContext(Theme);  return (
    <div className={backgroundColor == 'white' ? 'main' : 'main1'}>
      <h1 id={color == 'black'? 'hh' : 'h'}>Data</h1>
     { 
     props.data.map((item,index) => {
        return(
            <div id={backgroundColor == 'white' ? 'container' : 'box'}
             key={index}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.address}</p>
            <p>{item.occupation}</p>
            <p>{item.phoneNumber}</p>
        </div>
        )
     })
     }
    </div>
  )
}
