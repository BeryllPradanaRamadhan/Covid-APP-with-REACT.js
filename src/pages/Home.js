import { useState } from "react";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import data from "../utils/constants/provinces";
import AddFormCovid from "../components/AddFormCovid";

function Main() {
  const [dt_provinsi, setDataProvinsi] = useState(data);
  return (
    <main>
      <Hero />
      <Global />
      <Provinsi dt_provinsi = {dt_provinsi} setDataProvinsi={setDataProvinsi}/>
      <AddFormCovid dt_provinsi = {dt_provinsi} setDataProvinsi={setDataProvinsi}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
