import "./style.scss"
import Heading from "../common/Heading"
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import ProductsInfo from "./ProductsInfo"
import ProductsJSON from "../../db/products.json"
import { Link } from "react-router-dom"

function Products() {
  const images = [img1, img2, img3, img4, img5]

  return (
    <main className="products-page-wrapper">
      <Heading size={1.2}>Products</Heading>
      <div className="component-wrapper">
        {
          ProductsJSON?.map((product, index) => {
            return (
              <>
                <ProductsInfo image={images[product.id % images.length]}>
                  <h2>{product.title}</h2>
                  <p>{product.content}</p>
                  <Link to={"/products/" + product.id} className="products-info">
                    <button className="warning-btn">Подробнее</button>
                  </Link>
                </ProductsInfo>
              </>
            )
          })
        }
      </div>
      <h2>
        <span>*</span> в процессе регистрации
      </h2>
    </main>
  );
}

export default Products;
