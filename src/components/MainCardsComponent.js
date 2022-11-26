import React from "react";
import DownMenuBar from "./DownMenuBar";

function MainCardsComponent({ Cards }) {
  return (
    <>
      {/* adding choose category ellement*/}
      <DownMenuBar></DownMenuBar>
      <div className="flex flex-col w-full h-screen mainCardsConteiner">
        {/* Add loading element */}
        {typeof Cards === "string" ? (
          <progress className="progress w-56"></progress>
        ) : (
          Cards
        )}
      </div>
    </>
  );
}

export default MainCardsComponent;
