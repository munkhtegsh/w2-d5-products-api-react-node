import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Detail from './components/Detail';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productImg: '',
      productPrice: 0,
      cartTotal: 0
    }

    this.addToCart = this.addToCart.bind(this)

  }

  componentDidMount() {
    axios.get( 'https://practiceapi.devmountain.com/products' )
      .then( res => {
        this.setState({
          products: res.data
        })
      } )
  }

  handleClick( img, price ) {
    this.setState({
      productImg: img,
      productPrice: price
    })
  }

  addToCart() {
    console.log( 'hit!' )
    let total = Number( this.state.cartTotal ) + Number( this.state.productPrice )
    this.setState({
      cartTotal: total
    })
  }
  
  render() {

    let products = this.state.products.map( (product, i) => {
      return (
        <div key={i} className='product' onClick={() => this.handleClick(product.image, product.price)}>
          <img src={ product.image } />
        </div>
      )
    } )

    return (
      <div className="App">
        <div className='productContainer'>

          <p>CART TOTAL: ${this.state.cartTotal}.00</p>

          <Detail
            productImg={this.state.productImg}
            productPrice={this.state.productPrice}
            addToCart={this.addToCart}
          />

          {products}
        </div>
      </div>
    )
  }
}

export default App