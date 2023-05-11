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
           
            <div className="carousel w-full">
                <button onClick={this.previousSlide}>Previous</button>
                <div className="carousel-images">
                    {this.state.activeIndexes.map(index => {
                        const image = this.props.images[index];
                        return (
                            <img key={index} src={image.src} alt={image.alt} />
                        );
                    })}
                </div>
                <button onClick={this.nextSlide}>Next</button>
            </div>
        );
    }
}
export default Carousel;
