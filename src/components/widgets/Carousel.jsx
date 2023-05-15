import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Carousel = (props) => {
    const [activeIndexes, setActiveIndexes] = useState([0, 1, 2]);

    const nextSlide = () => {
        const lastIndex = props.images.length - 1;
        const newActiveIndexes = activeIndexes.map(index => {
            const shouldResetIndex = index === lastIndex;
            return shouldResetIndex ? 0 : index + 1;
        });

        setActiveIndexes(newActiveIndexes);
    }

    const previousSlide = () => {
        const lastIndex = props.images.length - 1;
        const newActiveIndexes = activeIndexes.map(index => {
            const shouldResetIndex = index === 0;
            return shouldResetIndex ? lastIndex : index - 1;
        });

        setActiveIndexes(newActiveIndexes);
    }

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: previousSlide
    });

    return (
        <div {...handlers} className="carousel w-full flex justify-center items-center">
            <button 
                className="arrow arrow-left" 
                onClick={previousSlide}
                aria-label="Previous slide"
            >
            </button>
            <div className="carousel-images">
                {activeIndexes.map(index => {
                    const image = props.images[index];
                    return (
                        <img 
                            key={index}
                            src={image.src} 
                            alt={image.alt} 
                            className="carousel-image"
                            width="631"
                            height="658"
                        />
                    );
                })}
            </div>
            <button 
                className="arrow arrow-right" 
                onClick={nextSlide}
                aria-label="Next slide"
            >
            </button>
        </div>
    );
}

export default Carousel;