/* eslint-disable class-methods-use-this */
// React
import React, { PureComponent } from "react"

// Services
import * as ProductsService from "ecommerce-api"

// UI
import { UiProductCard } from "ecommerce-ui"

class ItemList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      productList: [],
    }
  }

  componentDidMount() {
    this.getProductList()
  }

  getProductList() {
    ProductsService.getAll().then(response =>
      this.setState({
        productList: response,
      })
    )
  }

  handleClickAddToCart() {
    console.log("Click add to cart")
  }

  render() {
    const { productList } = this.state
    console.log("Products: ", productList)
    return productList.map(product => (
      <UiProductCard
        description={product.description}
        handleClickAddToCart={this.handleClickAddToCart}
        image={product.urlImage}
        price={product.price}
        title={product.title}
      />
    ))
  }
}

export { ItemList }
