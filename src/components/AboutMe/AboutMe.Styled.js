import styled from "styled-components";

const StyledAboutMe = styled.div`
padding: 2rem auto;
border: inset 15px #06D6A0;


.judul {
    text-align: center;
    color: #06D6A0;
    p {
        color: #073B4C;
    }
    margin: 3rem;
}

section {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    text-align: center;
    padding: 1rem auto;
    margin: 4rem auto;
}

img {
    width: 60%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    
}

.hero__left {
    flex-basis: 50%;
}



.hero__right {
    flex-basis: 60%;
    text-align: left;
    color: #073B4C;
    h1 {
        color: #06D6A0;
    }
}
`
export default StyledAboutMe;