import './style.scss';
import blogs from '../../db/blog.json';
import { useState } from 'react';
import BlogInfo from './BlogInfo';


function Blog() {
    const [information, setInformation] = useState("")
    function getInfo() {
        for(let item of blogs){
            
           
        }
    }
    return (
        <main className="blog-page-wrapper">
          <BlogInfo />
        </main>
    );
}

export default Blog;