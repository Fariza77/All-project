import Heading from "../common/Heading";
import "./style.scss";
import mapImage from '../../assets/images/contact/map.png';
import secondMap from '../../assets/images/contact/map1.png';


function Contacts() {
  return (
    <main className="contacts-page-wrapper">
      
      <div className="left">
      <Heading size={1.2}>Контакты</Heading>
        <div>
          <h5>Задайте нам любой вопрос</h5>
          <p>+7 701 776 24 20</p>
        </div>
        <div>
          <h5>Электронная почта</h5>
          <p>client@fonte.kz</p>
        </div>
        <div>
          <h5>Юридический адрес</h5>
          <p style={{width: '400px'}}>
            050040/A15E3H4, проспект Аль-Фараби, 77/7​, 10 этаж, Алматы,
            Казахстан Z05T3D0, проспект Мангилик Ел, 55/20, Офисы 345-346,
            Астана, Казахстан
          </p>
        </div>
        <div className="bottom">
        
        <div>
        <img src={secondMap}  />
        </div>
    <div>
    <img src={mapImage}  />
    </div>
    
        
    
  </div>
      </div>
      
      <div className="rigth">
        <form >
            <div>
                <input type="text" placeholder="Name"/>
            </div>
            <div>
                <input type="text" placeholder="Email"/>
            </div>
            <div>
                <input type="text" placeholder="Phone"/>
            </div>
            <button className="warning-btn">Отправить</button>
        </form>
      </div>
      
    </main>
  );
}

export default Contacts;
