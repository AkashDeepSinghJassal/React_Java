import React, { useEffect } from 'react'
import { useQuery, gql, NetworkStatus} from "@apollo/client";
const get_data=gql`
    query getDetails{
        infoSearch{
            id 
            price
            title
            location
            varified 
            imageurl
        }
    }
`;
// export default function Util(props){
//     const {data}=useQuery(get_data);
//     useEffect(()=>{
//         console.log(data);
//         this.props.getQuery(data);
//      })
//      return data;
    // console.log("hello");

//}