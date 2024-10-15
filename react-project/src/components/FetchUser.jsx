import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { globalContext } from '../store'

// HOC -> Higher Order Component 
// is used to control the access to a component

export default function FetchUser(Component) {
    return function AuthenticatedComponent(props) {
        const state = useContext(globalContext)
        const navigate = useNavigate()

        useEffect(() => {
            // if (localStorage.getItem("logged-in-user") == null) {
            //     sendToAuth()
            //     console.clear()
            //     return
            // }    

            let user = localStorage.getItem("logged-in-user")
            if (user != null) {
                state.dispatch({ type: "SET_USER", payload: JSON.parse(user) })
            }
        }, [navigate])

        return <Component {...props} />
    }
}