import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { BASE_URL, globalContext } from '../../store'
import './blogDetails.scss'

import BlogImg1 from "../../assets/images/blog-1.png"
import BlogImg2 from "../../assets/images/blog-2.png"
import BlogImg3 from "../../assets/images/blog-3.png"
import BlogImg4 from "../../assets/images/img3.png"
import BlogImg5 from "../../assets/images/img5.png"
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import { FaEdit } from "react-icons/fa";

import CreateUpdateForm from './CreateUpdateForm'


export default function BlogDetails(props) {
    const { id } = useParams()
    const navigate = useNavigate()

    const images = [BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5]
    const [blogObject, setBlogObject] = useState({})
    const [showUpdateMode, setShowUpdateMode] = useState(false)
    const state = useContext(globalContext)

    function goToTopSmoothly() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    let image = images[parseInt(id) % images.length]

    useEffect(() => {
        goToTopSmoothly()
        fetchBlog()
    }, [])

    function fetchBlog() {
        state.dispatch({ type: "SET_LOADED", payload: false })
        try {
            fetch(BASE_URL + "blogs/" + String(id))
                .then(response => response.json())
                .then(data => {
                    setBlogObject(data)
                    document.title = getInro(data.title) + "..."
                    state.dispatch({ type: "SET_LOADED", payload: true })
                })
        } catch (e) {
            console.log(e)
        }
    }

    function getInro(title) {
        return title?.split(" ").slice(0, 3).join(" ")
    }

    function requestDeleteBlog(e) {
        if (confirm("Are you sure to delete this blog?")) {
            fetch(BASE_URL + "blogs/" + String(id), {
                method: "DELETE"
            })
                .then(response => console.log(response))
            toast.success("Blog deleted successfully", { theme: "dark" })
            navigate("/blog")
        } else {
            return
        }
    }

    function requestUpdateBlog(e, status = true) {
        setShowUpdateMode(status)
    }

    return (
        <>
            {showUpdateMode ?
                <div className="blog-page-wrapper">
                    {state.loaded ?
                        <CreateUpdateForm
                            blogObject={blogObject}
                            updateMode={true}
                            user={blogObject.author}
                            goBack={(e) => requestUpdateBlog(e, false)}
                        />
                        :
                        <div className="loader">Loading ...</div>
                    }
                </div>
                :
                <div className="blog-details-wrapper">
                    <p className='intro'>Блог / {getInro(blogObject.title)}</p>

                    <h1 className='title'>{blogObject.title}</h1>

                    <button className="warning-btn delete-btn"
                        onClick={requestDeleteBlog}
                    >
                        <FaTrashAlt />
                        Delete
                    </button>
                    <button className="warning-btn update-btn"
                        onClick={requestUpdateBlog}
                    >
                        <FaEdit />
                        Update
                    </button>

                    <p className='author-info'>
                        <span className='author'>{blogObject.author?.username}</span>,
                        <span className='date'>{blogObject.date}</span>
                    </p>

                    <img src={image} width={"100%"} height={400} />

                    <p className='subtitle-1'>{blogObject.subtitle1}</p>
                    <p className='subtitle-2'>{blogObject.subtitle2}</p>


                    <div className="other">
                        <h2>Интересное по теме</h2>
                        <div className="row">
                            <div className="col">
                                <h2>Рэй Далио перестал считать наличные «мусором»</h2>
                                <a href="#">Подробнее &rArr; </a>
                            </div>
                            <div className="col">
                                <h2>Инвестиции в 5G – необходимое условие экономического развития</h2>
                                <a href="#">Подробнее &rArr; </a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
