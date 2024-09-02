import "./authContent.scss"
import Heading from '../common/Heading'
import { useState } from 'react'

function Registration(props) {
    const [regState, setRegState] = useState({
        username: '',
        email: '',
        password: '',
        re_password: ''
    })
    const [errors, setErrors] = useState({})

    async function submit(e) {
        e.preventDefault();

        if (!regState.username || !regState.email || !regState.password || !regState.re_password) {
            alert("Please, fill in all fields")
            return
        } else if (regState.password !== regState.re_password) {
            alert("Passwords do not match")
            return
        }
        try {
            if (await createNewAccount(e)) {
                alert("Successfully created a new account for " + regState.username)
            } else {
                throw new Error("Failed to create a new account")
            }
        } catch (e) {
            alert("Failed to create a new account")
        } finally {
            e.target.reset()
            props.closeModal(false)
        }
    }

    async function createNewAccount(e) {
        // TODO: Implement the function to create a new account
    }

    function handleState(e) {
        const key = e.target.name
        const val = e.target.value
        setRegState({ ...regState, [key]: val })
    }

    return (
        <div className="auth-content-wrapper">
            <Heading size={1.2}>Sign up</Heading>

            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="name">Username</label>
                    <input
                        className={errors.username ? "input-error" : ""}
                        type="name" id="name" placeholder='Username' name='username'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        className={errors.email ? "input-error" : ""}
                        type="email" id="email" placeholder='Email' name='email'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input
                        className={errors.password ? "input-error" : ""}
                        type="password" id="password" placeholder='Password' name='password'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password-conf">Password confirmation</label>
                    <input
                        className={errors.re_password ? "input-error" : ""}
                        type="password" id="password-conf" placeholder='Password confirmation' name='re_password'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <button className='warning-btn'>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Registration;