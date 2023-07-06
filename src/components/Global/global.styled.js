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
}
`;

export default GlobalStyled;