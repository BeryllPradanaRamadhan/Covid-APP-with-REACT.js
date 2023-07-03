import Card from "../Card";
import GlobalStyled from "./global.styled";
import React from "react";

function Global(props) {
  const { global,title } = props;


  return (
    <GlobalStyled>
    <div>
      <div className="judul">
        <h1>{title}</h1>
        <p>
          Data Covid Berdasarkan Indonesia
        </p>
      </div>
      <br />

      <div className="induk">
       {global.map(function (card,index) {
        return <Card key={card.total} status={card.status} total={card.total} color={
          index === 0 ? "#06D6A0" : index === 1 ? "#118AB2" : "#EF476F"
        }/>
       })}
      </div>
    </div>
    </GlobalStyled>
  );
}

export default Global;