import './style.scss'
import Heading from '../common/Heading'
import blogJson from '../../db/blog.json'
import Item from './Item.jsx';
import { useEffect, useState } from 'react'

function Blog(props) {
    const [activePage, setActivePage] = useState('blogs');

    useEffect(() => {
        document.title = "Blog";
    }, []);


    function activateSection(e) {
        const { name } = e.target;
        const btns = document.querySelectorAll(".blog-page-wrapper .action-btns button")
        btns.forEach(btn => { btn.classList.remove("active") })
        e.target.classList.add("active")
        setActivePage(name)
    }


    return (
        <div className="blog-page-wrapper">
            <Heading size={1}>Blog</Heading>

            <div className="action-btns">
                <button className="warning-btn active" name='blogs' onClick={activateSection}>
                    Blogs
                </button>
                <button className="warning-btn" name='create' onClick={activateSection}>
                    Create New Blog
                </button>
            </div>



            {activePage === "blogs" ?
                blogJson.map((item, index) => {
                    return (
                        <div key={index} className="item-wrapper">
                            <Item item={item} />
                        </div>
                    )
                })
                :
                null
            }
        </div>
    )
}

export default Blog