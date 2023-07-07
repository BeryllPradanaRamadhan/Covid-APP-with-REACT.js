import HeroStyled from "./hero.styled";
import image from "../assets/Hero.svg"

function Hero() {
  return (
    <HeroStyled>
    <div>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
          <h3>Monitoring Perkembangan Covid</h3>
          <p>
          Vaksin booster Covid-19 bisa membuat kamu makin aman dari serangan virus, meminimalisir resiko sakit parah, rawat inap, dan kematian akibat Covid-19.
          </p>
          <p>Segera lengkapi vaksinasi kamu di fasilitas kesehatan dengan daftar dibawah ini!</p>
          <button>Vaccine</button>
        </div>
        <div className="hero__right">
          <img 
          src={image} alt="Medical Care" />
        </div>
      </section>
    </div>
    </HeroStyled>
  );
}

export default Hero;
