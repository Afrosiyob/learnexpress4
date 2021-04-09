import { Redirect, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Main from "../pages/main/Main";
import { ProtectedAuth } from "./ProtectedAuth";
import { ProtectedMain } from "./ProtectedMain";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/main" />

        <ProtectedMain path="/main" component={Main} />
        <ProtectedAuth path="/login" component={Login} />
        <ProtectedAuth path="/registration" component={Registration} />

        <Redirect from={`/*`} to={`/main`} />
      </Switch>
    </Router>
  );
};
