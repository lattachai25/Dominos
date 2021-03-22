import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Orders from "./Orders";
import Details_Coupons_report from "./Details_Coupons_report";
import ProductsText from "./ProductsText";

function theseason() {
  return (
    <div>
      <div className="col-3">
        <div className="card" style={{ width: "21.5rem" }}>
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">kaset</h5>
            <p className="card-text">The Report By Branch.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Orders />
            </li>
            <li className="list-group-item">
              <ProductsText />
            </li>
            <li className="list-group-item">
              <Details_Coupons_report />
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default theseason;
