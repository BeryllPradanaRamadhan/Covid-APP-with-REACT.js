import axios from "axios";
import Hero from "../../components/Hero";
import { useEffect, useState } from "react";
import Global from "../../components/Global";
import ENDPOINT from "../../utils/constants/endpoint";
import IndonesiaProvinces from "../../components/IndonesianProvinces";

function Indonesia() {
const [indonesia, setIndonesia] = useState([])
const [dt_provinsi, setProvinces] = useState([])

    useEffect(() => {
        getIndonesiaSituation();
    }, [])

    async function getIndonesiaSituation() {
        const response = await axios(ENDPOINT.INDONESIA)
        setIndonesia(response.data.indonesia);
        setProvinces(response.data.regions);
        
    }

    return(
        <>
        <Hero />
        <Global title="Indonesia Situation" global={indonesia} />
        <IndonesiaProvinces title="Situation By Provinces" dt_provinsi={dt_provinsi} />
        </>
    );
}

export default Indonesia;