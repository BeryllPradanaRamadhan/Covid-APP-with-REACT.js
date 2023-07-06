import { useEffect, useState } from "react";
import Global from "../components/Global";
import Hero from "../components/Hero";
import axios from "axios";
import ENDPOINT from "../utils/constants/endpoint";
import Regions from "../components/Regions";

function Home() {
const [global, setGlobal] = useState([])
const [regions, setRegions] = useState([])

  useEffect(() => {
    getGlobalSituation();
  }, []);

  async function getGlobalSituation() {
    const response = await axios(ENDPOINT.GLOBAL)
    setGlobal(response.data.global)
    setRegions(response.data.regions)

  }

  return (
    <>
      <Hero />
      <Global title="Global Situation" global={global} />
      <Regions data={regions}/>
    </>
  );
}

export default Home;
