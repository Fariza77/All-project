import Heading from "../common/Heading";
import "./style.scss";
import firstImage from "../../assets/images/1.png";
import secondImage from "../../assets/images/2.png";
import thirdImage from "../../assets/images/3.png";
import Member from "./Member";

function Team() {
  return (
    <main className="team-page-wrapper">
      <div className="section">
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
      <div className="all-members-wrapper">
        <Member name="Эрджан Мусин" title="CFO" image={firstImage} />
        <Member name="Олжас Укенов" title="CEO" image={secondImage} />
        <Member name="Эрджан Мусин" title="CFO" image={firstImage} />
        <Member name="Олжас Укенов" title="CEO" image={secondImage} />
        <Member name="Эрджан Мусин" title="CFO" image={firstImage} />
        <Member name="Олжас Укенов" title="CEO" image={secondImage} />
   
      </div>

      <div className="section">
        <Heading size={1.2}> Сторонники и Партнеры</Heading>
        <br />
        <h2>SeedBox</h2>
        <h2>Freedom Finance</h2>
      </div>
    </main>
  );
}

export default Team;
