import './style.scss'
import Heading from '../common/Heading'
import blogJson from '../../db/blog.json'
import Item from './Item.jsx';
import { useEffect, useContext } from 'react'
import CreateForm from './CreateForm.jsx';
import { globalContext, BASE_URL } from "../../store"

function Blog(props) {
    const state = useContext(globalContext);

    useEffect(() => {
        document.title = "Blog";
        fetchBlogs()
    }, []);


    function fetchBlogs() {
        fetch(BASE_URL + "products")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                state.dispatch({ type: "SET_BLOGS", payload: data })
            })
    }

    function activateSection(e) {
        const { name } = e.target;
        const btns = document.querySelectorAll(".blog-page-wrapper .action-btns button")
        btns.forEach(btn => { btn.classList.remove("active") })
        e.target.classList.add("active")
        state.dispatch({ type: "SET_BLOG_ACTIVE_PAGE", payload: name })
    }


    return (
        <div className="blog-page-wrapper">
            <Heading size={1}>
                {state.blogActivePage === "blogs" ?
                    "Blog" : "Create New Blog"
                }
            </Heading>

            {state.user.username &&
                <div className="action-btns">
                    <button className="warning-btn active" name='blogs' onClick={activateSection}>
                        Blogs
                    </button>

                    <button className="warning-btn" name='create' onClick={activateSection}>
                        Create New Blog
                    </button>
                </div>
            }

            {state.blogActivePage === "blogs" ?
                [...state.blogs.sort((a, b) => parseInt(b.id) - parseInt(a.id)), ...blogJson].map((item, index) => {
                    return (
                        <div key={index} className="item-wrapper">
                            <Item item={item} />
                        </div>
                    )
                })
                :
                <CreateForm user={state.user} />
            }
        </div>
    )
}

export default Blog