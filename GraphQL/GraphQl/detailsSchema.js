const fetch = require('node-fetch');
const axios = require('axios');
const typeDefs = `
type Query{
    infoDetails(id:ID!): details
    infoSearch:[search]
    
}
type search{
    id:Int
    price:Int
    title:String
    location:String
    verified:Boolean
    imageurl:String

}
type details{
    id:ID
    title: String
    cityname:String
    statename:String
    imagecount:Int
    imagedetails:String
    price:Int
    condition:String
}
`;
const resolvers = {
    Query: {
        // infoDetails: async (props) =>{
        //     const { id } = props;
        //     let res = await axios.get(`https://productbackendapi.herokuapp.com/products/getId?id=${id}`);
        //     //console.log(res.data);
        //     return {

        //         id: res.data.productid,
        //         title:res.data.title,
        //         cityname:res.data.cityname,
        //         statename:res.data.statename,
        //         imagecount:res.data.imagecount,
        //         imagedetails:res.data.imagedetails,
        //         price:res.data.attributereservedprice,
        //         condition:res.data.attributeproductcondition 
        //     }

        // },
        infoSearch:async()=>{
            let res = await axios.get("https://peaceful-springs-01295.herokuapp.com/products");
            // return {
            //     id: res.data.id,
            //     title:res.data.title,
                
            // }
            return res.data;

        }
      
    }
        

}

module.exports={
    typeDefs,
    resolvers
}