// React
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Ui
import { UiNavbar } from "ecommerce-ui"

// Routes
import { routes } from "../configs/routes"

// Styles
import "./App.scss"

function App() {
  const handleClickLoginButton = () => {
    console.log("Cliquei")
  }

  return (
    <>
      <div className="ecommerce__navbar">
        <UiNavbar
          authenticatedUser={false}
          handleClickLoginButton={handleClickLoginButton}
          hasLoginButton
          hasMenuButton={false}
          label="E-Commerce"
        />
      </div>
      <BrowserRouter>
        <Switch>
          {routes.map(route => (
            <Route
              component={route.component}
              exact
              key={route.path}
              path={route.path}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
