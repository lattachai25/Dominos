import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Sukhumvit22 from "./sukhumvit_22/theseason";
import Sukhumvit01 from "./sukhumvit_01/theseason";
import Sukhumvit103 from "./sukhumvit_103/theseason";
import Pattaya from "./pattaya/theseason";
import Samyan from "./samyan/theseason";
import PinKlao from "./pinKlao/theseason";
import Plearnary_Mall from "./plearnary_mall/theseason";
import St_Louis from "./st_louis/theseason";
import Victoria_Garden from "./victoria_garden/theseason";
import TheNine from "./the_nine/theseason";
import Senafest from "./sena_fest/theseason";
import Muang_Thong_Thani from "./muang_thong_thani/theseason";
import Suthiisan from "./suthiisan/theseason";
import Amorini from "./amorini/theseason";
import Metropole_Thonglor from "./metropole_thonglor/theseason";
import Seacon_BangKae from "./seacon_bangKae/theseason";
import Silom from "./silom/theseason";
import Jas_Sinakarin from "./jas_sinakarin/theseason";
import Kaset from "./kaset/theseason";
// import Nichida_Thani from "./nichida_thani/theseason";
import China_Town from "./china_town/theseason";
import Bangkapi from "./bangkapi/theseason";
import BangluamPoo from "./bangluam_poo/theseason";
import RatnaKosin from "./ratnakosin/theseason";
import Ladkrabang from "./ladkrabang/theseason";
import Nonthaburi from "./nonthaburi/theseason";
import TheSeason from "./theseason_98/theseason";

function App() {
  return (
    <div className="container">
      <br />
      <br />
      <div className="alert alert-primary" role="alert">
        Dominos Pizza
      </div>

      <div className="row">
        <Sukhumvit22 />
        <Sukhumvit01 />
        <Sukhumvit103 />

        <Pattaya />
        <Samyan />
        <PinKlao />

        <Plearnary_Mall />
        <St_Louis />
        <Victoria_Garden />

        <TheNine />
        <Senafest />
        <Muang_Thong_Thani />

        <Suthiisan />
        <Amorini />
        <Metropole_Thonglor />

        <Seacon_BangKae />
        <Silom />
        <Jas_Sinakarin />

        <Kaset />
        {/* <Nichida_Thani /> */}
        <China_Town />

        <Bangkapi />
        <BangluamPoo />
        <RatnaKosin />

        <Ladkrabang />
        <Nonthaburi />
        <TheSeason />
      </div>

      <div class="card-header text-center">
        Copyright@ Dominos Pizza 2021 - 2030
      </div>
    </div>
  );
}

export default App;
