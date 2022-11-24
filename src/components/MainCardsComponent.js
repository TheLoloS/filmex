import React from "react";
import DownMenuBar from "./DownMenuBar";

function MainCardsComponent({ Cards }) {
  return (
    <>
      <DownMenuBar></DownMenuBar>
      <div className="flex flex-col w-full h-screen mainCardsConteiner">
        {typeof Cards === "string" ? (
          <progress className="progress w-56"></progress>
        ) : (
          Cards
        )}
        {console.log(typeof Cards)}
      </div>
    </>
  );
}

export default MainCardsComponent;
