import './style.scss';
import blogs from '../../db/blog.json';
import { useState } from 'react';
import BlogInfo from './BlogInfo';


function Blog(props) {
    const [information, setInformation] = useState(null)
    function getInfo() {
        for(let item of blogs){
            setInformation(item)
            information?.map((infos,index) => {
                console.log(infos)
                return (
                    <div key={index} className="more-info">
                        <BlogInfo infos={infos}/>
                    </div>
                )
            })
           
        }
    }
    return (
        <main className="blog-page-wrapper">
          <BlogInfo />
        </main>
    );
}

export default Blog;