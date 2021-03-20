import React from "react"
import "./guide.css"
class Guide extends React.Component{
    render(){
        fetch("/products", {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*' ,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
        return(
            <ul><h3>User Guidelines</h3>
                <li>Be careful while Paying online</li>
                <li>Beware of ads with unrealistic prices, lookalikes or clone products</li>
                <li>Chat and ask questions to be clear on product details</li>
                <li>Do not deposit/transfer money to bank or any third party payment gateways without verifying the credentials</li>
            </ul>
            )
    }
} 
export default Guide