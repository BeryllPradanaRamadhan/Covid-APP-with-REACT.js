import styled from "styled-components";

const ProvinsiStyled = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;

h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
    color: #06D6A0;
}

p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    text-align: center;
    color: #118AB2;
}

.tabel__container {
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .th {
    color: #06D6A0;
  }

  th,
  td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
  }

  @media only screen and (max-width: 768px) {
    .judul {
      font-size: 2rem;
    }
  
    .judul__description {
      font-size: 1rem;
    }
  
    th,
    td {
      font-size: 0.8rem;
      white-space: nowrap;
    }
  }
`

export default ProvinsiStyled;