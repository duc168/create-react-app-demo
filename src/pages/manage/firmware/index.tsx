import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import CreateFirmwarePage from './create'
import FirmwareListPage from './list'
import UpdateFirmwarePage from './update'
const FirmwarePage: React.FC<any> = () => {
    const { path } = useRouteMatch()
    return <Switch>
        <Route path={`${path}/create`}>
            <CreateFirmwarePage />
        </Route>
        <Route path={`${path}/update/:firmwareId`}>
            <UpdateFirmwarePage />
        </Route>
        <Route path={`${path}/list`}>
            <FirmwareListPage />
        </Route>
        <Route path={`${path}/*`}>
            <Redirect to={`${path}/list`} />
        </Route>
        <Route path={`${path}`}>
            <Redirect to={`${path}/list`} />
        </Route>
        
    </Switch>
}

export default FirmwarePage