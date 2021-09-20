import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import CreateDeviceTypePage from "./create";
import DeviceTypeListPage from "./list";
import UpdateDeviceTypePage from "./update";
const DeviceTypePage: React.FC<any> = () => {
  const { path } = useRouteMatch();
  const createPath = `${path}/create`
  const updatePath = `${path}/update/:deviceTypeId`
  const listPath = `${path}/list`
  return (
    <Switch>
      <Route path={createPath}>
        <CreateDeviceTypePage />
      </Route>
      <Route path={updatePath}>
        <UpdateDeviceTypePage />
      </Route>
      <Route path={listPath}>
        <DeviceTypeListPage />
      </Route>
      <Route path={`${path}/*`}>
        <Redirect to={listPath} />
      </Route>
      <Route path={`${path}`}>
        <Redirect to={listPath} />
      </Route>
    </Switch>
  );
};

export default DeviceTypePage;
