import "./style.scss";
import Heading from "../common/Heading";
import ImageAbout from "../../assets/images/image.png";
import { TbLicense } from "react-icons/tb";
import Rectangle from '../../assets/images/Rectangle.png';


function About() {
  return (
    <main className="about-page-wrapper">
      <Heading size={1.2}>О нас</Heading>
      <div className="image-wrapper">
        <img src={ImageAbout} alt="ImageAbout" />
        <div className="p-div">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse
            hic optio quo id fuga magnam unde architecto eveniet reprehenderit,
            in alias amet. Ipsum blanditiis debitis veritatis reprehenderit quas
            distinctio consequuntur dicta earum, ratione sequi dolorum quidem
            atque quisquam excepturi fuga, quo laudantium eveniet illo. Itaque,
            ratione. <br /> <br />
            Beatae aliquam corporis nisi illum dignissimos atque, id possimus,
            accusamus, tempora quam nemo eaque recusandae. Blanditiis totam
            molestias quidem accusantium vitae. Quos quaerat, accusamus iure
            itaque, qui aperiam laboriosam totam exercitationem tempore officiis
            aut excepturi ut cumque aliquam voluptatem quisquam animi expedita
            harum sint numquam repellat a modi dolorem? <br /> <br />
            Corporis, expedita possimus autem eos ex porro magni tenetur,
            perferendis assumenda, quibusdam exercitationem reprehenderit quia
            praesentium ut quidem alias et quo eveniet vero molestias delectus?
           
          </p>
          <button className="warning-btn">
            <TbLicense /> License
          </button>
        </div>
      </div>
      <div className="hr-wrapper">
        <img src={Rectangle} alt="Rectangle" />
      </div>
    </main>
  );
}

export default About;
