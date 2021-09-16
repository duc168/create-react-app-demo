import React from 'react'
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom'
import LoginPage from './login'
import SignupPage from './signup'
const AuthPage: React.FC<any> = () => {
    const { path } = useRouteMatch()
    return <Switch>
        <Route path={`${path}/login`}>
            <LoginPage />
        </Route>
        <Route path={`${path}/signup`}>
            <SignupPage />
        </Route>
    </Switch>
}

export default AuthPage