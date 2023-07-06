import CardStyled from "./card.styled";

function Card(props) {
    const { status , total , color} = props    

    return(
        <CardStyled>
        <div className="card">
          <div>
            <h3 className="card__title">{status}</h3>
            <h1 className="card__hasil" style={{color: color}}>{total.toLocaleString("id-ID")}</h1>
          </div>
        </div>
        </CardStyled> 
    );
}

export default Card;