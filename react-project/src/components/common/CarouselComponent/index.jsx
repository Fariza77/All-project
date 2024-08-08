import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


function CarouselComponent(props) {
    return (
        <div className="carousel-wrapper">
            <Carousel showThumbs={false}>
                {props.images.map((image, index) => {
                    return (
                        <div key={index} className='slide'>
                            <img src={image} width={"100%"} height={350} />
                      
                        </div>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default CarouselComponent;