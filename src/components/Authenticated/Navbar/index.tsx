import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { logout } from "@/redux/authSlice";
import { useHistory } from "react-router";
const Navbar: React.FC<any> = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const history = useHistory()
  const dispatch = useDispatch();
  const onClickSignIn = () => {
    history.push('/auth/login')
  }
  const onClickLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>Example<span className={styles.description}>OS</span></div>
      <div className={styles.menu}>
      {!isAuth && <div className={styles.signIn}>
        <button onClick={onClickSignIn}>Sign in</button>
      </div>
      }
      {isAuth && <div className={styles.logout}>
          <button onClick={onClickLogout}>Logout</button>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
