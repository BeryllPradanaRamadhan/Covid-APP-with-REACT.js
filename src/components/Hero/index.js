import styles from "../Hero/hero.module.css";
import image from "../assets/Hero.svg"

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            similique explicabo optio dolorem repellendus error tenetur beatae
            dicta minima nesciunt!
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} 
          src={image} alt="Medical Care" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
