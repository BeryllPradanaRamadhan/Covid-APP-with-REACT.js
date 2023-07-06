import CardRegion from "../CardRegion";
import RegionsStyled from "./regions.styled";

function Regions(props) {
  const { data } = props;

  return (
    <RegionsStyled>
      <div className="judul">
        <h1>Situation by Regions</h1>
        <p>Pilihan Covid</p>
      </div>
      <div className="induk">
        {data.map((data, index) => (
          <CardRegion key={index} name={data.name} numbers={data.numbers}/>
        ))}
      </div>
    </RegionsStyled>
  );
}

export default Regions;
