import React from "react";


class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { spans: 0 }
        this.ImageRef = React.createRef(); //here we have created the instance of Ref . 
    }

    componentDidMount() {
        // here we are using addEventListner to get image height there was one problem that is we are getting image value zero.
        this.ImageRef.current.addEventListener("load", this.setSpans)
    }

    setSpans = () => {
        console.log(this.ImageRef.current.clientHeight);
        const height = this.ImageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans: spans })
    }


    render() {
        const { description, urls } = this.props.image
        return (
            <>
                <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                    <img
                        ref={this.ImageRef}
                        alt={description}
                        src={urls.regular}
                    ></img>
                </div>
            </>
        )
    }
}
export default ImageCard;