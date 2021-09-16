import AppContainer from "@/components/AppContainer";
import Navbar from "@/components/Authenticated/Navbar";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from './styles.module.scss'
const UnauthenticatedMiddleware: React.FC<any> = ({ children }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  if (isAuth === true) {
    return <Redirect to={`/`} />;
  }
  return (
    <div className="unauthenticated">
      <Navbar />
      <AppContainer>
          <div className={styles.container}>
          {children}
          </div>
      </AppContainer>
    </div>
  );
};

export default UnauthenticatedMiddleware;
