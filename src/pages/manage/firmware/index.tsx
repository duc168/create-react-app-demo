import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import CreateFirmwarePage from './create'
import FirmwareListPage from './list'
import UpdateFirmwarePage from './update'
const FirmwarePage: React.FC<any> = () => {
    const { path } = useRouteMatch()
    const listPath = `${path}/list`
    const createPath = `${path}/create`
    const updatePath = `${path}/update/:firmwareId`
    return <Switch>
        <Route path={createPath}>
            <CreateFirmwarePage />
        </Route>
        <Route path={updatePath}>
            <UpdateFirmwarePage />
        </Route>
        <Route path={listPath}>
            <FirmwareListPage />
        </Route>
        <Route path={`${path}/*`}>
            <Redirect to={listPath} />
        </Route>
        <Route path={`${path}`}>
            <Redirect to={listPath} />
        </Route>
        
    </Switch>
}

export default FirmwarePage