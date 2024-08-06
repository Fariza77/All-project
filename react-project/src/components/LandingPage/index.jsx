import "./style.scss"
import Heading from "../common/Heading"
import CarouselComponent from "../common/CarouselComponent"

import CImage1 from "../../assets/images/img1.png"
import CImage2 from "../../assets/images/img2.png"
import CImage3 from "../../assets/images/img3.png"
import CImage4 from "../../assets/images/img4.png"
import CImage5 from "../../assets/images/img5.png"

function LandingPage() {
  let images = [CImage1, CImage2, CImage3, CImage4, CImage5]

  return (
    <main className="landing-page-wrapper">
      <Heading size={1.4}>О нас</Heading>
      <CarouselComponent images={images} />
    </main>
  )
}

export default LandingPage;
