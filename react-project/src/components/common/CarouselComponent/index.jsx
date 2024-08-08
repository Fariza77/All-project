import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


function CarouselComponent(props) {
    return (
        <div className="carousel-wrapper">
            <div className="inner-carousel-info">
                {props.children}
            </div>
            <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                {props.images.map((image, index) => {
                    return (
                        <div key={index} className='slide'>
                            <img src={image} width={"100%"} height={650} />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default CarouselComponent;