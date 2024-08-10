import "./style.scss"

export default function ProductsInfo(props) {
  return (
    <div className="products-info-wrapper">
      <div className="inner-product-info">
        {props.children}
      </div>
      <img src={props.image} />
    </div>
  )
}
