import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Contextdata = createContext();
const url = "http://localhost:4000/data";

function Api({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <Contextdata.Provider value={data}>{children}</Contextdata.Provider>;
}

export default Api;
