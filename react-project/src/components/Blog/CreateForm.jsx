import "./createFormStyle.scss"
import { useEffect, useState, useContext } from "react"
import AddImage from "../../assets/icons/addImage.png"
import { BASE_URL, globalContext } from '../../store'
import { fetchBlogs } from '../../store/helpers.js'
import { toast } from 'react-toastify'
import BlogForm from './BlogForm.jsx';


// 1.  GET      - GET data from the server  =>  fetch(URL)
// 2.  POST     - SEND data to the server   =>  fetch(URL, {method: "POST", body: JSON.stringify(data)})
// 3.  PUT      - UPDATE data on the server =>  fetch(URL, {method: "PUT", body: JSON.stringify(data)})
// 4.  PATCH    - PARTIAL UPDATE data       =>  fetch(URL, {method: "PATCH", body: JSON.stringify(data)})
// 5.  DELETE   - DELETE data from the server => fetch(URL, {method: "DELETE"})


function CreateForm(props) {
    const [form, setForm] = useState({
        author: props.user,
        date: (new Date()).toLocaleDateString(),
        title: "",
        image: "",
        subtitle1: "",
        subtitle2: ""
    })
    const state = useContext(globalContext)

    // CRUD  =>  Create Read Update Delete

    async function submit(e) {
        e.preventDefault();
        try {
            const data = JSON.stringify({ ...form, id: String(new Date().getTime()) })
            fetch(BASE_URL + "blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data
            })
                .then(response => response.json())
                .then(async (data) => {
                    console.log(data)
                    toast.success("Blog created successfully")
                    const payload = await fetchBlogs()
                    state.dispatch({ type: "SET_BLOGS", payload:payload })
                    state.dispatch({ type: "SET_BLOG_ACTIVE_PAGE", payload: "blogs" })
                })
        }
        catch (e) {
            console.log(error)
            toast.error("Error creating blog")
        }

        setForm({
            author: props.user,
            date: (new Date()).toLocaleDateString(),
            title: "",
            image: "",
            subtitle1: "",
            subtitle2: ""
        })
    }

    function handleStateForm(e) {
        const { name, value } = e.target

        if (name !== "image") {
            setForm({ ...form, [name]: value })
        } else {
            // const imageFile = e.target.files[0]
            // const fileReader = new FileReader()
            // fileReader.readAsDataURL(imageFile)
            // fileReader.onload = (e) => {
            //     setForm({ ...form, image: fileReader.result })
            // }
        }
    }

    return (
        <div className="blog-create-form-wrapper">
            <BlogForm 
                submit={submit}
                handleStateForm={handleStateForm}
                form={form}
                submitButtonText="Create"
            />
        </div>
    );
}

export default CreateForm;