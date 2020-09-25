import React from "react";
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import Home from "../screens/home";
import Users from "./users";

export default function Routes() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/users">
                        <Users></Users>
                    </Route>
                </Switch>
            </div>
        </Router>
    );

}
