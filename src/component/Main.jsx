import axios from "axios";
import React, { useEffect, useState } from "react";
import * as TokenStorage from "../data/storage";
function Main(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/hello", {
        headers: {
          authorization: `Bearer ${TokenStorage.getToken()}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        if (!response.data.success) {
          props.history.push("/login");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return <div>{data.message}</div>;
}

export default Main;
