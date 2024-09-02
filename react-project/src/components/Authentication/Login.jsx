import Heading from '../common/Heading'
import "./authContent.scss"
import { useState } from 'react'


function Login(props) {
    const [loginState, setloginState] = useState({})

    async function submit(e) {
        e.preventDefault();
        if (!loginState.username || !loginState.password) {
            alert("Please, fill in all fields")
            return
        }
        await loginToAccount(e)
        setloginState({})
        e.target.reset()
    }

    async function loginToAccount(e) {
        // TODO: Implement the function to login to an account
    }

    function handleState(e) {
        const key = e.target.name
        const val = e.target.value
        setloginState({ ...loginState, [key]: val })
    }

    return (
        <div className="auth-content-wrapper">
            <Heading size={1.2}>Login</Heading>


            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="name">Username or e-mail</label>
                    <input
                        type="name" id="name" placeholder='Username or e-mail' name='username'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password" id="password" placeholder='Password' name='password'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <button className='warning-btn'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;