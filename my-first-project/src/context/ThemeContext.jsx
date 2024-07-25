import * as React from 'react';
import Register from '../components/Register';
import Data from '../components/Data';
import Signup from '../components/Signup';
export const Theme = React.createContext();


export default function ThemeContext(props) {
    const[color,setColor] = React.useState('black');
    const[backgroundColor,setBackgroundColor] = React.useState('white');


    let data = {
        color,setColor,
        backgroundColor,setBackgroundColor

    }

  return (
    <Theme.Provider value={data}>
        {props.children}
    </Theme.Provider>
  )
}
