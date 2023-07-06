import { nanoid } from "nanoid";
import Dataprovinsi from "../Dataprovinsi";
import TableStyled from "./table.styled";

function Table(props) {
  const { dt_provinsi, title } = props;
  return (
    <TableStyled>
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
              {dt_provinsi.provinces.map(function (province, i) {
                return (
                  <Dataprovinsi
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
    </TableStyled>
  );
}

export default Table;
