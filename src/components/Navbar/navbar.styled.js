import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  div {
    background-color: #06d6a0;
    color: #ffff;
    padding: 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2rem;
    margin: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
    text-align: left;
  }

  a{
    text-decoration: none;
    color: #fff;

  }

  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin: 1rem;
      align-items: center;
      margin-left: 3rem;
    }

    ul {
      flex-direction: row;
      margin: 1rem;
      margin-right: 3rem;
    }

    li {
      margin: 0.5rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    div {
      padding: 0.5rem;
    }
    h1 {
      align-items: center;
    }
    li {
      margin: 0.8rem;
      cursor: pointer;
    }
  }
`;

export default StyledNavbar;
