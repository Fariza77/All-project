import React from 'react';
import blogImg1 from '../../assets/images/blog-1.png';
import blogImg2 from '../../assets/images/blog-2.png';
import blogImg3 from '../../assets/images/blog-3.png';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';


export default function Item(props) {
    let images = [blogImg1, blogImg2, blogImg3, img1, img2];
    let image = images[parseInt(id) % images.length];
    
  return (
        <div className="blog-item-wrapper">
            <img src={image}  />
            <p>Менеджемент</p>
            <h1>{props.item.title}</h1>
        </div>
  )
}
