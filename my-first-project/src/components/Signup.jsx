import React, { useContext, useState } from 'react';
import './signup.css';
import { Theme } from '../context/ThemeContext';


export default function Signup(props) {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[address,setAddress] = useState('');
  const[phoneNumber,setPhoneNumber] = useState('');
  function handleSubmit(e){
    e.preventDefault();
  }
  
  return (

    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label> <br />
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder='enter name' value={name}/>
        </div>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input type="text" placeholder='enter Email' value={email}/>
        </div>
        <div>
          <label htmlFor="password">Password</label> <br />
          <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='enter password' value={password}/>
        </div>
        <div>
          <label htmlFor="address">Address</label> <br />
          <input onChange={(e)=> setAddress(e.target.value)} type="text" placeholder='enter address' value={address}/>
        </div>
        <div>
          <label htmlFor="phone number">Phone number</label> <br />
          <input onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder='enter phone number' value={phoneNumber}/>
        </div>
        <div>
          <button id='btn'>Sign up</button>
        </div>
      </form>
    </div>
  )
}
