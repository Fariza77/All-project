import Heading from "../../common/Heading";
import "./style.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="heading-wrapper">
        <Heading size={1.2}>Fonte</Heading>
      </div>
      <div className="footer-links">
        <div className="left">
          <a href="#">О нас</a>
          <a href="#">Команда</a>
          <a href="#">Блог</a>
          <a href="#">Продукты</a>
          <a href="#">Контакты</a>
        </div>
        <div className="right">
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
      <div className="footer-social-media">
        <span><FaFacebookF className="facebook" /></span>
        <span><FaInstagram className="instagram" /></span>
        <span><FaTwitter className="twitter" /></span>
      </div>
    </footer>
  );
}

export default Footer;
