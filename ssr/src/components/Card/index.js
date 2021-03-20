import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'
import './style.css'
//props - img, price, name
export default class index extends Component {
    state = {
        clicked : false
    }
    handleClick = () => {
        console.log("clicked");
        this.setState({clicked : true})
    }
    render() {
        return (
            <div>
                {this.state.clicked && 
                    <Redirect to={`/${this.props.prodId}`} />
                }
                <div className="card" onClick = {this.handleClick}>
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
                            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                                verified </p>
                        </div>
                        <div className="buy-now">
                            <Button varient="primary" size="sm">Buy Now</Button>{' '}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
