import styled from "styled-components";

const HeroStyled = styled.div`
/* Small Screen */
div {
    padding: 0.5rem;
    margin: 1rem;
}
section {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-bottom: 3rem;
}
h2 {
    color: #06D6A0;
    font-size: 2.44rem;
    margin-bottom: -0.8rem;
}
.hero__left {
    margin: 0rem;
    margin-bottom: 1.7rem;
}
h3 {
    color: #118ab2;
    margin-bottom: 2rem;
}
p {
    color: #073b4c;
}
button {
    padding: 0.7rem 2.3rem;
    border-radius: 7px;
    border: none;
    background-color: #06D6A0;
    color: #ffff;
    cursor: pointer;
}
img {
    max-width: 80%;
    height: auto;
    border-radius: 25%;
}

/* Medium Screen */
@media (min-width: 768px) {
    section {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
    }
    .hero__right {
        display: flex;
        justify-items: end;
    }
}

/* Large Screen */
@media (min-width: 992px) {
    div {
        max-width: 1200px;
        margin: 0rem auto;
    }
    .hero__left {
        flex-basis: 40%;
    }
    .hero__right {
        flex-basis: 60%;
        display: flex;
        justify-content: end;
    }
    img {
        max-width: 60%;
        height: auto;
    }
}
`;

export default HeroStyled;