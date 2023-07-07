import { useState } from "react";
import AddformcovidStyled from "./addformcovid.styled";
import Error from "../Error";
import { nanoid } from "nanoid";
import image from "../assets/AddForm.svg"
import { useDispatch, useSelector } from "react-redux";
import { updateCase } from "../../features";

function AddFormCovid() {
  const dt_provinsi = useSelector((state) => state.case.provinces)
  const dispatch = useDispatch()

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

  function handleSubmit(e){
    e.preventDefault();
    Validasi()&& dispatch(updateCase({provinsi, status, jumlah}));
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
                dt_provinsi.map(function (province, i) {
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