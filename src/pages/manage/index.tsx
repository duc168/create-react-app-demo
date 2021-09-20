import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import DeviceTypePage from "./device-type";
import FirmwarePage from "./firmware";
const ManagePage: React.FC<any> = () => {
    const { path, url } = useRouteMatch()
    const devicePath = `${path}/device-type`
    const firmwarePath = `${path}/firmware`
  return (
    <Switch>
      <Route path={devicePath}>
        <DeviceTypePage />
      </Route>
      <Route path={firmwarePath}>
        <FirmwarePage />
      </Route>
      <Route path={`${path}`}>
            <Redirect to={devicePath} />
        </Route>
        <Route path={`${path}/*`}>
            <Redirect to={devicePath} />
        </Route>
    </Switch>
  );
};

export default ManagePage;
