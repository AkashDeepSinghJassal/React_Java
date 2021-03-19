import './App.css';
import React from 'react';
import NavbarHead from '../components/navbar/navbarHead';
import Details from'../components/Details/details'


class App extends React.Component {
  render(){ 
  
    return (
      <div>
        <NavbarHead></NavbarHead>
        
        <Details></Details>   
      </div>
  )
}
}
export default App;
