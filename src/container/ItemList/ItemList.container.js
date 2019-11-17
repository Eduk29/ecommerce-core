// React
import React, { PureComponent } from "react"

// Services
import * as ProductsService from "ecommerce-api"

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

  render() {
    console.log("State: ", this.state)
    return (
      <div>
        <h1>Container Item List</h1>
      </div>
    )
  }
}

export { ItemList }
