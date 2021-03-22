import React from 'react'
import "./showDetails.css"
import {Button} from "react-bootstrap"
import Guide from "./guide"
class ShowDetails extends React.Component{
    render(){
        
        return(
            <div className="show">
                <p style={{color:"grey"}}>{this.props.details.categoryname}</p>
                <b style={{color:"green"}}>{this.props.details.attributeproductcondition}</b>
                <h3>{this.props.details.content}</h3>
                {this.props.details.cityname+","+this.props.details.statename}
                <h3 style={{color:"deepskyblue"}}>{"Rs."+this.props.details.attributereservedprice}</h3>
                <center>
                <Button variant="info" size="lg">CALL</Button>
                <Button variant="info" size="lg">CHAT</Button>
                </center>
                
                
                <Guide></Guide>
                
            </div>
        )
    }
}
export default ShowDetails;