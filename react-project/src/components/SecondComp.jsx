

export default function SecondComp() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log({name,email,password})
    }
  return (
    <div>
      <form id='fr'
       onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
       <input onChange={(e) => setName(e.target.value)}
       type="text" placeholder='enter username'/>
       <label htmlFor="email">email</label>
       <input onChange={(e) => setEmail(e.target.value)}
       type="text" placeholder='enter email' />
       <label htmlFor="password">password</label>
       <input onChange={(e) => setPassword(e.target.value)}
       type="text" placeholder='enter password' />
    <button>submit</button>
      </form>
    </div>
  )
}
