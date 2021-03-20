import React from "react"
import Image from "./image"
import "./details.css"
import data from "../../data/data.json"
import ShowDetails from "./showDetails"
import Footer from './footer'
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
                {/* <SimilarProd></SimilarProd> */}
                <Footer></Footer>
                
            </div>
        );
    }
}
export default Details;