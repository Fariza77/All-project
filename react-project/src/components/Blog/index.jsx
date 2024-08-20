import './style.scss'
import Heading from '../common/Heading'
import blogJson from '../../db/blog.json'
import Item from './Item.jsx';

function Blog(props) {
    return (
        <div className="blog-page-wrapper">
            <Heading size={1}>Blog</Heading>


            {
                blogJson.map((item, index) => {
                    return (
                        <div key={index} className="item-wrapper">
                            <Item item={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blog