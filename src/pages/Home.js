import { useEffect, useState } from "react";
import Global from "../components/Global";
import Hero from "../components/Hero";
import axios from "axios";

function Home() {
const [global, setGlobal] = useState([])

  useEffect(() => {
    getGlobalSituation();
  }, []);

  async function getGlobalSituation() {
    const response = await axios("https://covid-fe-2023.vercel.app/api/global.json")
    setGlobal(response.data.global)
    console.log(response);
  }

  return (
    <>
      <Hero />
      <Global title="Global Situation" global={global} />
    </>
  );
}

export default Home;
