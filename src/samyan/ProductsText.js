import React from "react";
import axios from "axios";

import { ExportToExcel } from "./ExportToExcel";

function ProductsText() {
  const [data, setData] = React.useState([]);
  const fileName = "ProductsText"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://10.161.32.98:4001/api/ProductsText")
        .then((r) => setData(r.data));
    };
    fetchData();
  }, []);

  return (
    <div className="text-dark">
      <h5>Products Text </h5>
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}

export default ProductsText;
