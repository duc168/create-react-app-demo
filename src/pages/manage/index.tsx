import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DeviceTypePage from "./device-type";
import FirmwarePage from "./firmware";
const ManagePage: React.FC<any> = () => {
    const { path, url } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/device-type`}>
        <DeviceTypePage />
      </Route>
      <Route path={`${path}/firmware`}>
        <FirmwarePage />
      </Route>
    </Switch>
  );
};

export default ManagePage;
