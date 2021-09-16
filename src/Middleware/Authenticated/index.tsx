import AppContainer from "@/components/AppContainer";
import Navbar from "@/components/Authenticated/Navbar";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const AuthenticatedMiddleware: React.FC<any> = ({ children }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  if (isAuth === false) {
    return <Redirect to={`/auth/login`} />;
  }
  return (
    <div className="authenticated">
      <Navbar />
      <AppContainer>{children}</AppContainer>
    </div>
  );
};

export default AuthenticatedMiddleware;
