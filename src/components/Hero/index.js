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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            similique explicabo optio dolorem repellendus error tenetur beatae
            dicta minima nesciunt!
          </p>
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
