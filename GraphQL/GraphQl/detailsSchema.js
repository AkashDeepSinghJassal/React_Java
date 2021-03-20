const fetch = require('node-fetch');
const axios = require('axios');
const typeDefs = `
type Query{
    info: product
    ravi: String
}
type product {
    
}`;
const resolvers = {
    Query: {
        info: async () =>{
            let res = await axios.get("https://peaceful-springs-01295.herokuapp.com/products");
            console.log(res.data[0]);
            return {
                title: res.data[0].title
            }

        }
        // ,
        // 
        // return "hello";
        // }
    }
}
// const resolvers={
//     Query:{
//         info:async(parent,args)=>{
//             const res=await fetch("https://peaceful-springs-01295.herokuapp.com/products")
//             .then(response => response.json())
//             .then(response => {
//                 console.log(response)
//                 return {
//                     id:123,
//                     price: 123
//                 }
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         }
//     }
// }
module.exports={
    typeDefs,
    resolvers
}