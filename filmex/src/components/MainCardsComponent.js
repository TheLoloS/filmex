import React from "react";
import DownMenuBar from "./DownMenuBar";

function MainCardsComponent({ Cards }) {
  return (
    <>
      <DownMenuBar></DownMenuBar>
      <div className="flex flex-col w-full h-screen mainCardsConteiner">
        {Cards}
      </div>
    </>
  );
}

export default MainCardsComponent;
