import StyledCardRegion from "./CardRegion.styled";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

function CardRegion(props) {
    const { name, numbers } = props

  return (
    <StyledCardRegion>
    <div>
        <h1 className="card__title">{name}</h1>
    </div>
    <section>
    <div className="card__left">
        <p>confirmed</p>
        <h2>{numbers.confirmed.toLocaleString("id-ID")}</h2>
        <p>recovered</p>
        <h2>{numbers.recovered.toLocaleString("id-ID")}</h2>
        <p>death</p>
        <h2>{numbers.death.toLocaleString("id-ID")}</h2>
    </div>
    <div>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
    </div>
    </section>
    </StyledCardRegion>
  );
}

export default CardRegion;