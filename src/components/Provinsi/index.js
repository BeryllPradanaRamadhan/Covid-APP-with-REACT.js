import ProvinsiStyled from "./provinsi.styled";
import Dataprovinsi from "../Dataprovinsi";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

function Provinsi(props) {
  const dt_provinsi = useSelector((state) => state.case.provinces)
  const {  title } = props;
  return (
    <ProvinsiStyled>
    <div>
      <div>
        <h2>{title}</h2>
        <p>
          Data Covid Berdasarkan Provinsi
        </p>
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
                <Dataprovinsi key={nanoid()} nomer={++i} dt_provinsi={province} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </ProvinsiStyled>
  );
}

export default Provinsi;