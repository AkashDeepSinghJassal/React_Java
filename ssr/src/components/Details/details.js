import React from "react"
import Image from "./image"
import "./details.css"
import data from "../../data/data.json"
import ShowDetails from "./showDetails"
import Footer from './footer'
import axios from 'axios'
import SimilarProd from './similar'
class Details extends React.Component{
    state={data:data}
    // componentDidMount=()=>{
    //     const  id=342543696;
    //      console.log(id);
    //     const res =axios.get(`https://productbackendapi.herokuapp.com/products/getId?id=342543696`);
    //      console.log(res);
    // }
    render(){
       
        return(
            <div>
                <div className="detailsTop"> 
                    <Image source={this.state.data.images} count={this.state.data.image_count}></Image>
                    <ShowDetails details={this.state.data}></ShowDetails>

                </div>
                 <SimilarProd card={this.props.similar.infoSearch}></SimilarProd> 
                <Footer></Footer>
                
            </div>
        );
    }
}
export default Details;