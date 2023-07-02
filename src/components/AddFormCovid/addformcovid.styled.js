import styled from "styled-components";

const AddformcovidStyled = styled.div`
  margin: 5rem 1rem;
  padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
  }

  .form__left {
    display: none;
  }

  img {
    max-width: 70%;
    border-radius: 25px;
    height: auto;
    margin: 1rem;
    margin-top: 7rem;
  }

  h1 {
    text-align: center;
    color: #06d6a0;
    font-size: 2.44rem;
    margin-bottom: 1rem;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: #06d6a0;
    font-size: 1.3rem;
  }

  label {
    margin-bottom: 1rem;
    color: #06d6a0;
    font-size: 1.3rem;
  }

  .form__input {
    outline: none;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    border: 2px solid #06d6a0;
  }

  .form__input:focus {
    border: 1px solid #06d6a0;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
    display: block;
    margin: 1 auto;
    width: 100%;
  }

  /* Large Screen */
  div {
    max-width: 1200px;
    margin: 0rem auto;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .form__left {
    display: block;
    flex-basis: 60%;
  }

  .form__right {
    flex-basis: 40%;
  }
`;

export default AddformcovidStyled;
