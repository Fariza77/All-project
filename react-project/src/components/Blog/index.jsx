import './style.scss'
import Heading from '../common/Heading'
import Item from './Item.jsx';
import { useEffect, useContext } from 'react'
import CreateUpdateForm from './CreateUpdateForm.jsx';
import { globalContext, BASE_URL } from "../../store"
import { fetchBlogs } from "../../store/helpers.js"


function BlogItems({ blogs }) {
    return (
        <>
            <Heading size={1}>Blog</Heading>
            {
                blogs.length > 0 &&
                blogs.sort((a, b) => parseInt(b.id) - parseInt(a.id)).map((item, index) => {
                    return (
                        <div key={index} className="item-wrapper">
                            <Item item={item} />
                        </div>
                    )
                })

            }
        </>
    )
}

function Blog(props) {
    const state = useContext(globalContext);

    useEffect(() => {
        document.title = "Blog";
        fetchBlogsFn()
    }, []);

    async function fetchBlogsFn() {
        const data = await fetchBlogs()
        state.dispatch({ type: "SET_BLOGS", payload: data })
    }

    function activateSection(e) {
        const { name } = e.target;
        state.dispatch({ type: "SET_BLOG_ACTIVE_PAGE", payload: name })
    }

    return (
        <div className="blog-page-wrapper">
            {state.user.username &&
                <div className="action-btns">
                    <button className={state.blogActivePage === 'blogs' ? "active warning-btn" : "warning-btn"}
                        name='blogs' onClick={activateSection}
                    > Blogs </button>

                    <button className={state.blogActivePage !== 'blogs' ? "active warning-btn" : "warning-btn"}
                        name='create' onClick={activateSection}
                    > Create New Blog </button>
                </div>
            }

            {state.blogActivePage === "blogs" ?
                <BlogItems blogs={state.blogs} />
                :
                <CreateUpdateForm user={state.user} />
            }
        </div>
    )
}

export default Blog