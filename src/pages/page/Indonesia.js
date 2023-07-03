import axios from "axios";
import Hero from "../../components/Hero";
import { useEffect, useState } from "react";
import Global from "../../components/Global";

function Indonesia() {
const [indonesia, setIndonesia] = useState([])

    useEffect(() => {
        getIndonesiaSituation();
    }, [])

    async function getIndonesiaSituation() {
        const response = await axios("https://covid-fe-2023.vercel.app/api/indonesia.json")
        setIndonesia(response.data.indonesia)
        console.log(response);
    }

    return(
        <>
        <Hero />
        <Global title="Indonesia Situation" global={indonesia} />
        </>
    );
}

export default Indonesia;