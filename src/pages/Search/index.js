import React, { Component } from 'react'
import ProductData from '../../data/products.json'
import Card from '../../components/Card'
import './style.css'
export default class index extends Component {
    render() {
        console.log(ProductData);
        return (
            <div>
                <div className = "product-grid">
                    {
                        ProductData.map((product, index) => {
                            return <Card
                                key = {index}
                                prodName = {product.name}
                                prodPrice = {product.price}
                                imgSrc = {product.image}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}
