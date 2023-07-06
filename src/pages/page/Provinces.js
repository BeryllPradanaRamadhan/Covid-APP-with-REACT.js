import Hero from "../../components/Hero";
import AddFormCovid from "../../components/AddFormCovid";
import Provinsi from "../../components/Provinsi";
import { useState } from "react";
import data from "../../utils/constants/provinces";

function Provinces(props) {
  const [dt_provinsi, setDataProvinsi] = useState(data);

    return(
        <>
        <Hero />
        <Provinsi title="Provinsi" dt_provinsi = {dt_provinsi} setDataProvinsi={setDataProvinsi}/>
        <AddFormCovid dt_provinsi = {dt_provinsi} setDataProvinsi={setDataProvinsi}/>
        </>
    );
}

export default Provinces;