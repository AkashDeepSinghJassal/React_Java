const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./GraphQl/detailsSchema.js");
const app=express();
const server=new ApolloServer({typeDefs,resolvers});
server.applyMiddleware({app});
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});