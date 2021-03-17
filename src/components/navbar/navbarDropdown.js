import React,{Component} from 'react';
import {NavDropdown} from 'react-bootstrap';
class NavbarDropdown extends Component{
render(){
    
    return(
    <NavDropdown title={this.props.name} id="collasible-nav-dropdown">
        {this.props.useArray.map((data)=>{
            return <NavDropdown.Item href={`#`+data}>{data}</NavDropdown.Item>
            
        })}
    </NavDropdown> )
}
} 
export default NavbarDropdown;