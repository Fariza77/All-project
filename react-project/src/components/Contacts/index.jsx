import './style.scss'
import { useState } from 'react';

function Contacts() {
    const [count, setCount] = useState(0);

    return (
        <main className="contacts-page-wrapper">
            <h1>Contacts Page</h1>


            <hr />
            <br />
            <h2>{count}</h2>
            <br />
            <button className='warning-btn' onClick={(e) => { setCount(count + 1) }} >
                Increment
            </button>
            <button className='warning-btn' onClick={(e) => { setCount(count - 1) }} >
                Decrement
            </button>
        </main>
    );
}

export default Contacts;