import Heading from "../common/Heading";
import "./style.scss";
import firstImage from "../../assets/images/1.png";
import secondImage from "../../assets/images/2.png";
import thirdImage from "../../assets/images/3.png";

function Team() {
  return (
    <main className="team-page-wrapper">
      <div className="heading-wrapper">
        <Heading size={1.2}>Наша команда</Heading>
      </div>
      <div className="text-wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam is
          cupiditate tempora deserunt numquam aliquam aspernatur impedit? Cumque
          laudantium quae, distinctio asperiores, beatae magnam quos repudiandae
          reiciendis, quas nulla dolor deserunt.lorem laudantium quae,reiciendis,
          distinctio asperiores, beatae magnam quos repudiandae reiciendis, quas
          nulla dolor deserunt.lorem
        </p>
      </div>
      <div className="image-wrapper">
        <div className="img-container">
          <img src={firstImage} />
          <p>Эрджан Мусин</p>
          <p>CFO</p>
        </div>
        <div className="img-container">
          <img src={secondImage} />
          <p>Олжас уkенов</p>
          <p>CEO</p>
        </div>
        <div className="img-container">
          <img src={thirdImage} />
          <p>Эрджан Мусин</p>
          <p>CFO</p>
        </div>
        <div className="img-container">
          <img src={firstImage} />
          <p>Олжас уkенов</p>
          <p>CEO</p>
        </div>
        <div className="img-container">
          <img src={secondImage} />
          <p>Эрджан Мусин</p>
          <p>CFO</p>
        </div>
        <div className="img-container">
          <img src={thirdImage} />
          <p>Олжас уkенов</p>
          <p>CEO</p>
        </div>
      </div>
      <div className="heading-wrapper">
        <Heading size={1.2}> Сторонники и Партнеры</Heading>
      </div>
      <h3>SeedBox</h3>
      <h3>Freedom Finance</h3>
    </main>
  );
}

export default Team;
