import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/create-point" exact />
        </BrowserRouter>
    );
}
export default Routes;