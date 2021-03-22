import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import Orders from './theseason_98/Orders'
import Details_Coupons_report from './theseason_98/Details_Coupons_report'
import ProductsText from './theseason_98/Details_Coupons_report'



function App() {
  return (
    <div>
<div className="row">

<div className="card" style={{width: '18rem'}}>
  <h2>The Season</h2>
  <div className="card-body">
        <Orders />
        <ProductsText />
        <Details_Coupons_report />
  </div>
</div>


<div className="card" style={{width: '18rem'}}>
  <h2>Orders</h2>
  <div className="card-body">
        <Orders />
        <ProductsText />
        <Details_Coupons_report />
  </div>
</div>


</div>
    </div>
  )
}

export default App
