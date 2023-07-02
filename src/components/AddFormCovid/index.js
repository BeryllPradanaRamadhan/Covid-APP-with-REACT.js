import { useState } from "react";
import AddformcovidStyled from "./addformcovid.styled";

import Error from "../Error";
import { nanoid } from "nanoid";
import image from "../assets/AddForm.svg"

function AddFormCovid(props) {
  const { dt_provinsi, setDataProvinsi } = props;

  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  const [isProvinsiError, setIsProvinsiError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleProvinsi(e) {
    setProvinsi(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function Validasi() {
    if (provinsi === "") {
      setIsProvinsiError(true);
      return false;
    }

    else if (status === "") {
      setIsStatusError(true);
      return false;
    } else if (jumlah === "") {
      setIsJumlahError(true);
      return false;
    }

    else {
      setIsProvinsiError(false);
      setIsStatusError(false);
      setIsJumlahError(false);
      return true;
    }
  }

  function updateProvinces() {
    const index = dt_provinsi.provinces.findIndex(
      (item) => item.kota === provinsi
    );
    const foundProvinsi = dt_provinsi.provinces.find(
      (item) => item.kota === provinsi
    );

    if (status === "kasus") {
      dt_provinsi.provinces[index] = {
        ...foundProvinsi,
        kasus: parseInt(foundProvinsi.kasus) + parseInt(jumlah),
      };
    } else if (status === "sembuh") {
      dt_provinsi.provinces[index] = {
        ...foundProvinsi,
        sembuh: parseInt(foundProvinsi.sembuh) + parseInt(jumlah),
      };
    } else if (status === "meninggal") {
      dt_provinsi.provinces[index] = {
        ...foundProvinsi,
        meninggal: parseInt(foundProvinsi.meninggal) + parseInt(jumlah),
      };
    } else if (status === "dirawat") {
      dt_provinsi.provinces[index] = {
        ...foundProvinsi,
        dirawat: parseInt(foundProvinsi.dirawat) + parseInt(jumlah),
      };
    }
    setDataProvinsi({...dt_provinsi, provinces:[...dt_provinsi.provinces]});
  }

  function handleSubmit(e){
    e.preventDefault();
    Validasi()&& updateProvinces();
  }

  return (
    <AddformcovidStyled>
    <div>
      <section>
        <div className="form__left">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="form__right">
          <h1>Form Covid</h1>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <label>
                Provinsi
              </label>
              <select type="text" name="provinsi" id="provinsi" value={provinsi} onChange={handleProvinsi} className="form__input">
              <option value="">Pilih</option>
              {
                dt_provinsi.provinces.map(function (province, i) {
                  return <option key={nanoid()} nomer={++i} value={province.kota} > {province.kota} </option> 
                })
              }
              </select>
              {isProvinsiError ? <Error>Provinsi Wajib Diisi<p></p></Error>:""}
            </div>
            <div className="form__group">
              <label>
                Status
              </label>
              <select type="text" name="status" id="status" value={status} onChange={handleStatus} className="form__input">
              <option value="">Pilih</option>
              <option value="kasus">Positif</option>
              <option value="sembuh">Sembuh</option>
              <option value="dirawat">Dirawat</option>
              <option value="meninggal">Meninggal</option>
              </select>
              {isStatusError ? <Error>Status Wajib Diisi<p></p></Error>:""}
            </div>
            <div className="form__group">
              <label>Jumlah</label>
              <input
                type="number"
                id="jumlah"
                name="jumlah"
                className="form__input"
                value={jumlah} onChange={handleJumlah}
              />
              {isJumlahError ? <Error>Jumlah Wajib Diisi<p></p></Error>:""}
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
    </AddformcovidStyled>
  );
}

export default AddFormCovid;