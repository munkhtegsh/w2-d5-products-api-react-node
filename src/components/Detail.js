import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div>
                { this.props.productImg
                    ? <div>
                        <img src={this.props.productImg} className='detailImage' />
                        <p>${this.props.productPrice}.00</p>
                        <button onClick={() => this.props.addToCart()}>Add to Cart</button>
                      </div>
                    : null
                }
                
            </div>
        )
    }
}

export default Detail;