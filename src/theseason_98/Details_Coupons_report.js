import React from "react";
import axios from "axios";

import { ExportToExcel } from "./ExportToExcel";

function Details_Coupons_report() {
  const [data, setData] = React.useState([]);
  const fileName = "Details_Coupons_report"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://10.161.32.98:4001/api/Details_Coupons_report")
        .then((r) => setData(r.data));
    };
    fetchData();
  }, []);

  return (
    <div className="Details_Coupons_report">
      <h2>Details Coupons Report </h2>
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}

export default Details_Coupons_report;
