import React,{Component} from 'react';
import {NavDropdown} from 'react-bootstrap';
import './navbarDropdown.css';
class NavbarDropdown extends Component{
render(){
    
    return(
    <NavDropdown  title={this.props.name} id="collasible-nav-dropdown" renderMenuOnMount={true}>
        {this.props.useArray.map((data)=>{
            return <NavDropdown.Item href={`#`+data}>{data}</NavDropdown.Item>
            
        })}
    </NavDropdown> )
}
} 
export default NavbarDropdown;