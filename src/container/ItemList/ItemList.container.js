/* eslint-disable class-methods-use-this */
// React
import React, { PureComponent } from "react"

// Services
import * as ProductsService from "ecommerce-api"

// UI
import { UiContainer, UiGrid, UiProductCard, UiWithStyles } from "ecommerce-ui"

const styles = {
  gridItem: {
    padding: "10px 20px",
  },
  productItem: {
    minHeight: 420,
  },
}

class ItemListClass extends PureComponent {
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
    const { classes } = this.props

    return (
      <UiContainer maxWidth="xl" className={classes.container}>
        <UiGrid container>
          {productList.map(product => (
            <UiGrid item xs={3} className={classes.gridItem}>
              <UiProductCard
                description={product.description}
                handleClickAddToCart={this.handleClickAddToCart}
                image={product.urlImage}
                price={product.price}
                title={product.title}
                className={classes.productItem}
              />
            </UiGrid>
          ))}
        </UiGrid>
      </UiContainer>
    )
  }
}

const ItemList = UiWithStyles(styles)(ItemListClass)

export { ItemList }
