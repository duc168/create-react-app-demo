import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import CreateDeviceTypePage from "./create";
import DeviceTypeListPage from "./list";
import UpdateDeviceTypePage from "./update";
const DeviceTypePage: React.FC<any> = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/create`}>
        <CreateDeviceTypePage />
      </Route>
      <Route path={`${path}/update/:deviceTypeId`}>
        <UpdateDeviceTypePage />
      </Route>
      <Route path={`${path}/list`}>
        <DeviceTypeListPage />
      </Route>
      <Route path={`${path}/*`}>
        <Redirect to={`${path}/list`} />
      </Route>
      <Route path={`${path}`}>
        <Redirect to={`${path}/list`} />
      </Route>
    </Switch>
  );
};

export default DeviceTypePage;
