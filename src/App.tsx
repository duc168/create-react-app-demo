import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import AuthenticatedMiddleware from "./Middleware/Authenticated";
import UnauthenticatedMiddleware from "./Middleware/Unauthenticated";
import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import ManagePage from "./pages/manage";
import styles from "./styles.module.scss";
const App = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path="/">
            <AuthenticatedMiddleware>
              <HomePage />
            </AuthenticatedMiddleware>
          </Route>
          <Route path="/auth">
            <UnauthenticatedMiddleware>
              <AuthPage />
            </UnauthenticatedMiddleware>
          </Route>
          <Route path="/manage">
            <AuthenticatedMiddleware>
              <ManagePage />
            </AuthenticatedMiddleware>
          </Route>
          <Route path="/*">
            <AuthenticatedMiddleware>
              <HomePage />
            </AuthenticatedMiddleware>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
