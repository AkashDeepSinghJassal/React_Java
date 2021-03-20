import React, { Component } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from '../../components/Card'
import Footer from '../../components/Details/footer'
import Navbar from '../../components/navbar/navbarHead'
import ProductData from '../../data/products.json'
import './style.css'
export default class index extends Component {
    render() {
        console.log(ProductData);
        return (
            <div>
                <Navbar></Navbar>
                <div className="breadcrumb-wrapper">
                    <Breadcrumb>
                        <Breadcrumb.Item >Home</Breadcrumb.Item>
                        <Breadcrumb.Item >Bazzar</Breadcrumb.Item>
                        <Breadcrumb.Item active={true} >{"Electronics"}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="center-body">
                    <div className="search-result">
                        <p>
                        Search Results : Total {"4"} results found
                        </p>
                    </div>

                    <div className="product-grid">
                        {
                            ProductData.map((product, index) => {
                                return <Card
                                    key={index}
                                    prodId = {product.id}
                                    prodName={product.name}
                                    prodPrice={product.price}
                                    imgSrc={product.image}
                                />
                            })
                        }
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
