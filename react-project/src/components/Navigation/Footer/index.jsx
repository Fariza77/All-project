import Heading from "../../common/Heading";
import "./style.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="flex-div">
        <div className="heading-wrap">
          <Heading size={1.2}>Fonte</Heading>
        </div>
        <div className="components-wrapper">
          <p>О нас</p>
          <p>Команда</p>
          <p>Блог</p>
          <p>Продукты</p>
          <p>Контакты</p>
        </div>
        <div className="comp-wrapper">
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
        </div>
        <div className="icons-wrapper">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
