import React from 'react';
import Details from '../../components/Details/details';
import NavbarHead from '../../components/navbar/navbarHead';
import './App.css';


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
