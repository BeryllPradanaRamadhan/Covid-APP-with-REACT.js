import styled from "styled-components";

const GlobalStyled = styled.div`
/* Small Screen */
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
.judul {
    text-align: center;
}
h1 {
    color: #06D6A0;
}
p {
    font-size: 1.1rem;
    color: #118AB2;
    margin-top: -0.5rem;
}
.card1, .card2, .card3 {
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
    margin-bottom: 1rem;
}
.card1__title, .card2__title, .card3__title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color:#073B4C;
    ;
}
.card1__hasil {
    margin-bottom: 0.5rem;
    font-size: 30px;
    color: #06D6A0;
}

.card2__hasil {
    margin-bottom: 0.5rem;
    font-size: 30px;
    color: #118AB2;
}
  
.card3__hasil {
    margin-bottom: 0.5rem;
    font-size: 30px;
    color: rgb(228, 48, 120);
}
/* Medium Screen */

/* Large Screen */
@media (min-width: 992px) {
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0rem;
    }
    .induk {
        display: flex;
        flex-direction: row;
        margin-bottom: 2rem;
        margin-top: -1rem;
    }
    .judul {
        text-align: center;
    }
    .card1 {
        width: 250px;
        height: 150px;
        margin: 1rem;
    }

    .card2 {
        width: 250px;
        height: 150px;
        margin: 1rem;
    }

    .card3 {
        width: 250px;
        height: 150px;
        margin: 1rem;
    }
}
`;

export default GlobalStyled;