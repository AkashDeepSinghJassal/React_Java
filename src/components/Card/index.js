import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './style.css'
//props - img, price, name
export default class index extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="image-wrapper">
                        <div className="image-responser">
                            <img src={this.props.imgSrc} alt={this.props.prodName} />
                        </div>
                    </div>
                    <div className="info-wrapper">
                        <p className="prod-price" >
                            Rs {this.props.prodPrice}
                        </p>
                        <p className="prod-name">
                            {this.props.prodName}
                        </p>
                    </div>
                    <div className="other-details-wrapper">
                        <div className="assured">
                            <p> verified </p>
                        </div>
                        <div className="buy-now">
                            <Button varient="primary" size = "sm">Buy Now</Button>{' '}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
