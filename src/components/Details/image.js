import React from 'react';
import './image.css'
class Image extends React.Component{
    constructor(props){
        super(props);
        this.state={arr:[]}
    }
    componentDidMount=()=>
    {   
            this.props.source.forEach((element)=>{
            let str="https://teja7.kuikr.com/"+element.substring(0,element.length-47)+".jpeg";
            console.log(str);
            var array=this.state.arr;
            array.push(str);
            this.setState({arr:array});
            })
        console.log(this.state.arr);


    }
    render(){
        return(
                 
            
                <div className="container-outside">
                         <div><img src="https://teja8.kuikr.com/i4/20210228/Leonovo-7inch-display-16-gb-rom-dual-sim-tablet-easy-to-use-Touch-and-display-is-in-good-condition-with-32gb-memory-dual-sim-VB201705171774173-ak_LWBP1568511582-1614474750_lg.webp"className="container-inside"/></div>
                            <div className="scrollImage">
                                {
                                     this.state.arr.map((data)=>{
                                        return <img className="item"src={data}/>
                                    })
                                }
                            </div>
                            
                         

                </div>

        )
    }
}
export default Image