// React
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { routes } from "../configs/routes"

function App() {
  return (
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
  )
}

export default App
