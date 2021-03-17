import React from "react"
import Image from "./image"
import "./details.css"
import data from "../../data.json"
import ShowDetails from "./showDetails"
class Details extends React.Component{
    state={data:data}
    render(){
        //console.log(this.state.data.image_count);
        return(
            <div>
                <div className="detailsTop"> 
                    <Image source={this.state.data.images} count={this.state.data.image_count}></Image>
                    <ShowDetails details={this.state.data}></ShowDetails>

                </div>
                
            </div>
        );
    }
}
export default Details;