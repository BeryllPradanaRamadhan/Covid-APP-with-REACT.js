import { nanoid } from "nanoid";
import IndonesiaProvincesStyled from "./IndonesianProvinces.styled";
import DataProvinces from "../DataProvinces";

function IndonesiaProvinces(props) {
  const { dt_provinsi, title } = props;
  return (
    <IndonesiaProvincesStyled>
      <div>
        <div>
          <h2>{title}</h2>
          <p>Data Covid Berdasarkan Provinsi</p>
        </div>
        <div className="tabel__container">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {dt_provinsi.map(function (province, i) {
                return (
                  <DataProvinces
                    key={nanoid()}
                    nomer={++i}
                    dt_provinsi={province}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </IndonesiaProvincesStyled>
  );
}

export default IndonesiaProvinces;
