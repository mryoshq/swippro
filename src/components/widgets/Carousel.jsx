import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndexes: [0, 1, 2]
        };
    }

    nextSlide = () => {
        const lastIndex = this.props.images.length - 1;
        const activeIndexes = this.state.activeIndexes.map(index => {
            const shouldResetIndex = index === lastIndex;
            return shouldResetIndex ? 0 : index + 1;
        });

        this.setState({
            activeIndexes
        });
    }

    previousSlide = () => {
        const lastIndex = this.props.images.length - 1;
        const activeIndexes = this.state.activeIndexes.map(index => {
            const shouldResetIndex = index === 0;
            return shouldResetIndex ? lastIndex : index - 1;
        });

        this.setState({
            activeIndexes
        });
    }

    render() {
     //console.log(this.props.images); 
        return (
           
            <div className="carousel w-full flex justify-center items-center">
                <button className="arrow arrow-left" onClick={this.previousSlide}></button>
            <div className="carousel-images">
                {this.state.activeIndexes.map(index => {
                    const image = this.props.images[index];
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
            <button className="arrow arrow-right" onClick={this.nextSlide}></button>

            </div>
        );
    }
}
export default Carousel;
