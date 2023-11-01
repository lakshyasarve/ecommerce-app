// import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const MainCarousel = () => {

    const items = MainCarouselData.map((item)=> <img key='' className='cursor-pointer -z-10' role='presentation' src={item.image}alt=''/>)

    return(
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        // responsive={responsive}
        controlsStrategy="alternate"
    />
    )
    };

export default MainCarousel;