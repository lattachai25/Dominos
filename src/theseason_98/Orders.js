import React from "react";
import axios from "axios";


import { ExportToExcel } from "./ExportToExcel";

function Orders() {
  const [data, setData] = React.useState([]);
  const fileName = "Orders"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://10.161.32.98:4001/api/Orders")
        .then((r) => setData(r.data));
    };
    fetchData();
  }, []);

  return (
    <div className="text-success">
      <h2>Orders</h2>
      
      <ExportToExcel class="btn btn-primary" apiData={data} fileName={fileName} />
    </div>
  );
}

export default Orders;
