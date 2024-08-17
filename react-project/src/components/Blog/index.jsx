import './style.scss';
import blogs from '../../db/blog.json';
import blogImage from '../../assets/images/blog-1.png';
import { useState } from 'react';
import BlogInfo from './BlogInfo';


function Blog(props) {
    const [information, setInformation] = useState("")
    function getInfo() {
        for(let item of blogs){
            
           
        }
    }
    return (
        <main className="blog-page-wrapper">
          <BlogInfo info={getInfo()}/>
        </main>
    );
}

export default Blog;