import GlobalStyled from "./global.styled";
import data from "../../utils/constants/indonesia";
import React from "react";

function Global() {
  const { indonesia } = data;
  const konfirmasi = indonesia.find((unit) => unit.status === "Positif").total;
  const sembuh = indonesia.find((unit) => unit.status === "Sembuh").total;
  const mati = indonesia.find((unit) => unit.status === "Meninggal").total;

  return (
    <GlobalStyled>
    <div>
      <div className="judul">
        <h1>Indonesia</h1>
        <p>
          Data Covid Berdasarkan Indonesia
        </p>
      </div>
      <br />

      <div className="induk">
        <div className="card1">
          <div>
            <h3 className="card1__title">Confirmed</h3>
            <h1 className="card1__hasil">{konfirmasi}</h1>
          </div>
        </div>

        <div className="card2">
          <div>
            <h3 className="card2__title">Recovered</h3>
            <h1 className="card2__hasil">{sembuh}</h1>
          </div>
        </div>

        <div className="card3">
          <div>
            <h3 className="card3__title">Dead</h3>
            <h1 className="card3__hasil">{mati}</h1>
          </div>
        </div>
      </div>
    </div>
    </GlobalStyled>
  );
}

export default Global;