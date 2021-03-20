import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import './navbarDropdown.css';
import propTypes from 'prop-types'
class NavbarDropdown extends Component {
    render() {

        return (
            <NavDropdown title={this.props.name} id="collasible-nav-dropdown" renderMenuOnMount={true}>
                {this.props.useArray.map((data, index) => {
                    return <NavDropdown.Item key={index} href={`#` + data}>{data}</NavDropdown.Item>

                })}
            </NavDropdown>)
    }
}
NavbarDropdown.propTypes = {
    name : propTypes.string,
    useArray : propTypes.array
}
export default NavbarDropdown;