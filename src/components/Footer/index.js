import styles from "./footer.module.css";

function Footer() {
  return (
  <div className={styles.container}>
    <footer className={styles.footer}>
    <div>
      <h2 className={styles.footer__brand}>Covid ID</h2>
      <p className={styles.footer__author}>Development By Beryll</p>
    </div>
    <div className={styles.footer__group}>
    <ul className={styles.footer__item}>
      <li className={styles.footer__list}>Global</li>
      <li className={styles.footer__list}>Indonesia</li>
      <li className={styles.footer__list}>Provinsi</li>
      <li className={styles.footer__list}>About</li>
    </ul>
    </div>
    </footer>
  </div>
  );
}

export default Footer;