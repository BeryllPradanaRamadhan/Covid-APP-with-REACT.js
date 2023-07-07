import styled from "styled-components";

const StyledCardRegion = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);;
    padding: 20px;
    margin-left: 15px;
    margin: 1.5rem;

section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.card__title {
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 15px;
    color: black;
}

.card__subtitle {
  line-height: 1.5;
  margin-bottom: 1.25rem;    
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #118AB2;
}

.card__left{
    display: flex;
    flex-basis: 50%;
    text-align: left;
    display: inline;
p {
  text-align: left;
  color: #073B4C;
}
  }
.confirmed{
  color: #06d6a0;
  margin-top: -0.5rem;
}
.recovered{
  color: #118AB2;
  margin-top: -0.5rem;
}
.death{
  color: #ef476f;
  margin-top: -0.5rem;
}

img {
  width: 40px;
  height: auto;
  border-radius: 5px;
  margin: 17px;
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  justify-content: right;
  padding: 15px;
}`;

export default StyledCardRegion;