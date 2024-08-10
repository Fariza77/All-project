import React from 'react';

export default function ProductsInfo(props) {
  return (
    <div className="products-info-wrapper">
        <img src={props.image} />
    </div>
  )
}
