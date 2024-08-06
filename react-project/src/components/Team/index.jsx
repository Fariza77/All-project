import Heading from "../common/Heading";
import "./style.scss";
import firstImage from '../../assets/images/1.png';
import secondImage from '../../assets/images/2.png';
import thirdImage from '../../assets/images/3.png';



function Team() {
  return (
    <main className="team-page-wrapper">
      <Heading size={1.2}>Наша команда</Heading>
      <div className="paragraph-wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          fugiat sint ratione sunt molestiae vel cumque libero tempora. Mollitia
          perferendis officiis pariatur perspiciatis inventore eligendi ab
          obcaecati aspernatur, ducimus nemo hic enim beatae sed accusantium
          aperiam eum libero sint quibusdam ipsam atque at ex nisi. Aperiam
          maxime, sint necessitatibus minima saepe ipsam eius iste corporis
          distinctio, modi voluptate eligendi! Cupiditate?
        </p>
      </div>
      <div className="img-wrapper">
        <img src={firstImage} alt="firstImage" />
        <img src={secondImage} alt="secondImage" />
      </div>
    </main>
  );
}

export default Team;
