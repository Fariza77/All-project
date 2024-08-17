import React from 'react';
import blogImage from '../../assets/images/blog-1.png'; 

export default function BlogInfo(props) {
  return (
    <div className="blog-info-wrapper">
        <p>{props.author}</p>
        <img src={blogImage} alt="" />
    </div>
  )
}
