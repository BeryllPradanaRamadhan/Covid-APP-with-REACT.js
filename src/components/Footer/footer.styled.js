import styled from "styled-components";

const StyledFooter = styled.div`
  /* Small Screen */
  div {
    background-color: #06d6a0;
    color: #ffff;
    padding: 1rem;
  }
  footer {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 2rem;
    margin: 2rem;
  }
  ul {
    margin-bottom: 1rem;
    text-align: left;
  }
  li {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0.5rem;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  /* Medium Screen */
  @media (min-width: 768px) {
    footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    p {
      display: flex;
      margin-left: 3rem;
    }
    h2 {
      margin: 1rem;
      align-items: center;
      margin-left: 3rem;
    }
    ul {
      margin: 0.5rem;
      display: flex;
      margin-right: 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    div {
      padding: 0.5rem;
    }
    p {
      margin-left: 3rem;
      font-style: italic;
      margin-bottom: 1.5rem;
    }
    h2 {
      margin-left: 3rem;
      align-items: center;
    }
    ul {
      margin: 0.5rem;
      margin-right: 3rem;
    }
    li {
      margin: 0.8rem;
      cursor: pointer;
    }
  }
`;

export default StyledFooter;
