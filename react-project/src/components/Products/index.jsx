import Heading from "../common/Heading";
import "./style.scss";
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import ProductsInfo from "./ProductsInfo";



function Products() {
  return (
    <main className="products-page-wrapper">
      <Heading size={1.2}>Products</Heading>
      <div className="component-wrapper">
        <ProductsInfo image={img1}>
          <h2>Хедж-фонд</h2>
          <p>Классический выбор профессиональных инвесторов с заданными умеренными параметрами риска. Основан на инвестировании в бумаги индекса S&P 500 с диверсификацией по 11 секторам экономики.</p>
          <button className="warning-btn">Подробнее</button>
        </ProductsInfo>
        <ProductsInfo image={img2} />
        <ProductsInfo image={img3} />
        <ProductsInfo image={img4} />
        <ProductsInfo image={img5} />
      </div>
      <h2><span>*</span> в процессе регистрации </h2>
    </main>
  );
}

export default Products;
