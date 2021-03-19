import React from 'react';
import './image.css'
class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arr: [], mainImage: "" }
    }
    componentDidMount = () => {
        this.props.source.forEach((element) => {
            let str = "https://teja7.kuikr.com/" + element.substring(0, element.length - 47) + ".jpeg";

            var array = this.state.arr;
            array.push(str);
            this.setState({ arr: array });
        })
        this.setState({ mainImage: this.state.arr[0] })


    }
    changeImage = (imageDate) => {
        this.setState({ mainImage: imageDate.target.src })
    }
    render() {
        console.log(this.state.mainImage);
        return (


            <div className="container-outside">
                <div><img src={this.state.mainImage} className="container-inside" /></div>
                <div className="scrollImage">
                    {
                        this.state.arr.map((data, index) => {
                            return <img key = {index} className="item" src={data} index={index} onClick={(data) => this.changeImage(data)} />
                        })
                    }
                </div>



            </div>

        )
    }
}
export default Image