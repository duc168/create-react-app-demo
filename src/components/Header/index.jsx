import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
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
    axios
      .get("http://localhost:9191")
      .then((res) => {
        const {
          data: { test },
        } = res.data;
        setData(test);
      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => {
        setLoading(false);
      });
    // fetch('http://localhost:9191').then(response => {
    //     console.log('success ', response);
    //     response.json().then(responseJson => {
    //         console.log('success json ', responseJson);
    //         setData(responseJson.data.test);
    //     }).catch(errorJson => {
    //         console.log('error json ', errorJson);
    //     })
    // }).catch(error => {
    //     console.log('error ', error);
    // }).finally(() => {
    //     setLoading(false);
    // });
    // setLoading(true);
    // testPromise
    //   .then((response) => {
    //     console.log("success ", response);
    //     setData(response.data);
    //   })
    //   .catch((errorResponse) => {
    //     console.log("error ", errorResponse);
    //   })
    //   .finally(() => {
    //     console.log("promise is completed.");
    //     setLoading(false);
    //   });
    // console.log("test Promise");
  };

  return (
    <div className={styles.container}>
      <div>Data: {data}</div>
      <button onClick={getData}>
        {loading ? "Getting data..." : "Get Data"}
      </button>
    </div>
  );
};

export default Header;
