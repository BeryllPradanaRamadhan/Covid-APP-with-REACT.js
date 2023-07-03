import styled from "styled-components";

const CardStyled = styled.div`
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 150px;
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    margin: 2rem;
}

.card__title{
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color:#073B4C;
}

.card__hasil{
    margin-bottom: 0.5rem;
    font-size: 30px;
    color: #06D6A0;
}
`

export default CardStyled