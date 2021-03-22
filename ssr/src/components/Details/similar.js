import React from 'react'
import Card from '../Card/index'
import './similar.css'
class SimilarProd extends React.Component{
    render(){
        console.log(this.props.card)
        return(
            <div className="container">
                <h3>Similar Products</h3>
                <div className="crd">
                    {this.props.card.map((data,index)=>{
                        return <Card className="item"
                        key={index}
                        prodName={data.title}
                        prodPrice={data.price}
                        imgSrc={data.imageurl}
                        prodId={data.id}></Card>
                    })}
                </div>
            </div>
        )
    }
}
export default SimilarProd