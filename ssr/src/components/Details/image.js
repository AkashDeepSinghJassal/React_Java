import React from 'react';
import './image.css';
class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arr: [], mainImage: "" }
    }
    componentDidMount = () => {
        
        const images = this.props.source
        const img = images.split(' ')
        img.forEach((element, index) => {
            var i = element.replaceAll(`image${index+1}:`, '')
            var array=this.state.arr;
            if(i!=""){
                let str=""
                if(i.substring(i.length-4,i.length)=="jpeg")
                {
                    str="https://teja7.kuikr.com/"+i.substring(0,i.length - 47)+".jpeg";
                    array.push(str);
                }
                else{
                    str="https://teja7.kuikr.com/"+i.substring(0,i.length - 37)+".png";
                    array.push(str);
                }
                this.setState({arr:array});
            }
        })
        this.setState({ mainImage: this.state.arr[0] })


    }
    changeImage = (imageDate) => {
        this.setState({ mainImage: imageDate.target.src })
    }
    render() {
        return (
            <div className="container-outside">
                <div><img src={this.state.mainImage} className="container-inside" /></div>
                <div className="scrollImage">
                    {
                        this.state.arr.map((data, index) => {
                            return <img key={index} className="item" src={data} index={index} onClick={(data) => this.changeImage(data)} />
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Image