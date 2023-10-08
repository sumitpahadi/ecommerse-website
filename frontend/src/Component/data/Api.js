import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import "./data.css"
export const Contextdata = createContext();
const url = "https://ecommerse-5jkm.onrender.com/data";

function Api({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return   <div class="ring">Loading
    <span className="span"></span>
  </div>
  }

  return <Contextdata.Provider value={data}>{children}</Contextdata.Provider>;
}

export default Api;
