import { useState } from 'react';
import React from 'react';
import FirstComp from './components/FirstComp';

// props  =>  properties

export default function App() {
  const [state, setState] = useState({
    counter: 1, // Счетчик
  })
  function inc(e) {
    setState({ counter: state.counter + 1 })
  }
  function dec(e) {
    setState({ counter: state.counter - 1 })
  }

  return (
    <div>
      <FirstComp state={state}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, facilis dolorum molestias consequuntur illum ea eos reiciendis, numquam assumenda consequatur aspernatur sunt placeat veniam aliquid, vero nemo. Quod, accusantium voluptatem.</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </FirstComp>

    </div>
  )
}
