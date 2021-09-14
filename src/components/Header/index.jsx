import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { ReactComponent as RefreshIcon} from '@/assets/refresh.svg'
const Header = () => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(false);
  //   const testPromise = new Promise((resolve, reject) => {
  //     const test = 123456;
  //     setTimeout(() => {
  //       resolve({
  //           data: test
  //       });
  //     }, 5000);
  //   });
  const getData = () => {
    setLoading(true);
    // axios
    //   .get("http://localhost:9191")
    //   .then((res) => {
    //     const {
    //       data: { test },
    //     } = res.data;
    //     setData(test);
    //   })
    //   .catch((err) => {
    //     console.log("error", err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  };

  return (
    <div className={styles.container}>
      <div>Data: {data}</div>
      <button onClick={getData}>
        {loading ? "Getting data..." : <RefreshIcon className={styles.icon} />}
      </button>
    </div>
  );
};

export default Header;
