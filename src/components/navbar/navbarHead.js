import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import NavbarDropdown from './navbarDropdown';

class NavbarHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electronic: ["Mobile", "Laptop", "Air conditioner", "headphones"],
      furniture: ["Mobile", "Laptop", "Air conditioner", "headphones"],
      homeApp: ["Mobile", "Laptop", "Air conditioner", "headphones"]
    };
  }
  render() {
    // console.log(this.state.electronic);
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Quikr</Navbar.Brand>
        <Nav className="mr-auto">

          <NavbarDropdown useArray={this.state.electronic} name="Electronics"></NavbarDropdown>
          <NavbarDropdown useArray={this.state.furniture} name="Furniture"></NavbarDropdown>
          <NavbarDropdown useArray={this.state.homeApp} name="Home Appliances"></NavbarDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
  }
}
export default NavbarHead;