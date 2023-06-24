import Footer from "../components/Footer/footer";
import Hero from "../components/Hero/hero";
import Navbar from "../components/Navbar/navbar";

function Main() {
  return (
    <main>
      <Hero />
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
