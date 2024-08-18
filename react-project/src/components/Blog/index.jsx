import './style.scss'
import Heading from '../common/Heading';
import blogJson from '../../db/blog.json';
import { useParams } from 'react-router-dom';
import Item from './Item';

function Blog(props) {
    const { id } = useParams();

    return (
        <main className="blog-page-wrapper">
            <Heading size={1.2}>Blog</Heading>

            {
                blogJson?.map((item, index) => {
                    <div key={index} className="item">
                        <Item item={item}/>
                     </div>
                })
            }
            <Item />
        </main>
    )
}

export default Blog