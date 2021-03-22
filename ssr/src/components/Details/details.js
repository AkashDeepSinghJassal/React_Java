import React from "react"
import Image from "./image"
import "./details.css"
//import data from "../../data/data.json"
import ShowDetails from "./showDetails"
import Footer from './footer'
import axios from 'axios'
import SimilarProd from './similar'
class Details extends React.Component{
    state={data:""}
    componentDidMount=()=>{
    
         
         axios.get(`/products/getId?id=${this.props.prodId}`)
         .then((res) =>{
             this.setState({data:res.data})}
            )
         .catch(error=>{console.log(error)})
         
    }
    render(){
        if (typeof this.state.data !== 'string') {
            return(
                <div>
                    <div className="detailsTop"> 
                        <Image source={this.state.data.imagedetails} count={this.state.data.imagecount}></Image>
                        <ShowDetails details={this.state.data}></ShowDetails>
    
                    </div>
                     <SimilarProd card={this.props.similar.infoSearch}></SimilarProd> 
                    <Footer></Footer>
                    
                </div>
            );
        } else {
            return null;
        }
    }
}
export default Details;