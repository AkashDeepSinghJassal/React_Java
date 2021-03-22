import './App.css';
import React from 'react';
import NavbarHead from '../../components/navbar/navbarHead';
import Details from'../../components/Details/details'
import { useQuery, gql} from "@apollo/client";
const get_data=gql`
    query getSearch{
        infoSearch{
            id 
            price
            title
            location
            verified 
            imageurl
        }
    }
`;
//import { useQuery, gql} from "@apollo/client";

// const getData=gql`
// query getDetails($id: ID){
//   infoDetails(id: $id){
//     id 
//     title
//     cityname
//     statename
//     imagecount
//     imagedetails
//     price
//     condition

//   }
//}`;

function App(props){
    // const id=prodId;
    // const {loading,error,data}=useQuery(getData,{variables:{id:prodId}})
    const {loading,error,data}=useQuery(get_data);
    
    if(!loading)
    return (
      <div>
        <NavbarHead></NavbarHead>
        
        <Details  similar={data}val={props.prodId}></Details>   
      </div>
  )
  else return null;
}
export default App;
