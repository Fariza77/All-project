import { useState } from 'react'

export default function SecondComp() {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
  }

  function updateForm(e) {
    const name = e.target.name
    setForm({ ...form, [name]: e.target.value })
  }

  return (
    <div>
      <form id='form' onSubmit={handleSubmit}>

        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input onChange={updateForm} type="text" name='username' placeholder='Enter username' />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input onChange={updateForm} type="email" name='email' placeholder='Enter email' />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input onChange={updateForm} type="password" name='password' placeholder='Enter password' />
        </div>

        <div className="form-control">
          <button>submit</button>
        </div>
      </form>
    </div>
  )
}
