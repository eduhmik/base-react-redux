import React from "react"
import { Switch, Route } from "react-router-dom"
import allRoutes from "./routes"

const Routes = () => (
    <Switch>
        {allRoutes.map((route) => (
            <Route
                path={route.path}
                component={route.component}
                key={route.id}
                exact={route.exact}
            />
        )
        )}
    </Switch>
)

export default Routes;