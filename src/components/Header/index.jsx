import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { ReactComponent as RefreshIcon} from '@/assets/refresh.svg'
import config from "@/config";
const Header = () => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios
      .get(config.API_SERVER)
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
