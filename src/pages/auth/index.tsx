import React from 'react'
import { Switch, Link, Route, useRouteMatch, Redirect } from 'react-router-dom'
import LoginPage from './login'
import SignupPage from './signup'
const AuthPage: React.FC<any> = () => {
    const { path } = useRouteMatch()
    const loginPath = `${path}/login`
    const signupPath = `${path}/signup`
    return <Switch>
        <Route path={loginPath}>
            <LoginPage />
        </Route>
        <Route path={signupPath}>
            <SignupPage />
        </Route>
        <Route path={`${path}`}>
            <Redirect to={loginPath} />
        </Route>
        <Route path={`${path}/*`}>
            <Redirect to={loginPath} />
        </Route>
    </Switch>
}

export default AuthPage