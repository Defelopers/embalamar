import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
import img1 from '/public/img/noodle.png';
import img2 from '/public/img/copo.png';
import img3 from '/public/img/todos.png';

const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className='img-fluid' src={img1}/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img-fluid' src={img2} />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className='img-fluid'  src={img3} />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider