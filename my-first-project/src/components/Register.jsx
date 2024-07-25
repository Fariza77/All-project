import React,{ useContext, useState } from 'react';
import './register.css';
import { Theme } from '../context/ThemeContext';


export default function Register(props) {

    const[name,setName] = useState('John Doe');
    const[email,setEmail] = useState('myName@gmail.com');
    const[address,setAddress] = useState('Brooklyn NY');
    const[occupation,setOccupation] = useState('web developer');
    const[phoneNumber,setPhoneNumber] = useState('929 456-78-98');

    const{color,setColor,backgroundColor,setBackgroundColor} = useContext(Theme);

   function handleSubmit(e){
        e.preventDefault()
        let myData = {name,email,address,occupation,phoneNumber};
        props.getData(myData)
    }
    function updateTheme(){
      setColor(color === 'black'? 'white' : 'black')
      setBackgroundColor(backgroundColor === 'white'? 'black' : 'white')
    }
    
  return (
    
    <div>
      <button 
      className={color == 'black' ? 'bt' : 'bt1'}
      onClick={updateTheme}>{backgroundColor == 'white' ? 'dark theme' : 'light theme'}</button>
      <div id={backgroundColor == 'white'? 'containers' : 'main'}
    style={{backgroundColor:backgroundColor === 'white' ? 'black' : 'white' }}>
    
      <h1 style={{color:color === 'black' ? 'white' : 'black'}}
      id={color == "black" ? 'title' : 'header'}>Register</h1>
      <form id={color == 'black'? 'register-form' : 'reg-form'}
      onSubmit={handleSubmit}>
        <div>
            <label style={{color:color === 'black' ? 'white' : 'black'}}
            htmlFor="name">Name</label> <br />
            <input onChange={(e) => setName(e.target.value)}
            type="text" placeholder='enter name'
            value={name}/>
        </div>
        <div>
            <label style={{color:color === 'black' ? 'white' : 'black'}} style={{color:color === 'black' ? 'white' : 'black'}} htmlFor="email">Email</label> <br />
            <input onChange={(e) => setEmail(e.target.value)}
             type="text" placeholder='enter email'
             value={email}/>
        </div>
        <div>
            <label style={{color:color === 'black' ? 'white' : 'black'}} htmlFor="address">Address</label> <br />
            <input onChange={(e) => setAddress(e.target.value)}
            type="text" placeholder='address'
            value={address}/>
        </div>
        <div>
            <label style={{color:color === 'black' ? 'white' : 'black'}} htmlFor="occupation">Occupation</label> <br />
            <input onChange={(e) => setOccupation(e.target.value)}
            type="text" placeholder='occupation'
            value={occupation}/>
        </div>
        <div>
            <label style={{color:color === 'black' ? 'white' : 'black'}} htmlFor="phone number">Phone number</label> <br />
            <input onChange={(e) => setPhoneNumber(e.target.value)}
             type="text" placeholder='phone number'
             value={phoneNumber}/>
        </div>
        <div>
            <button id={backgroundColor == 'white'? 'btn' : 'btn1'}>Submit</button>
        </div>
        
      </form>
    </div>
    </div>
  )
}
