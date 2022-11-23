import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainCards from "./MainCards";

function SearchList({ movies }) {
  const params = useParams();
  //   const [ListItems, setListItems] = useState();
  //   movies && console.log(movies);
  return (
    <div className="flex flex-col w-full h-screen mainCardsConteiner">
      {movies &&
        movies.map((item, i) => {
          if (
            item.title.toLowerCase().indexOf(params.title.toLowerCase()) !== -1
          ) {
            console.log("udało sie");
            return (
              <MainCards
                id={item.id}
                title={item.title}
                description={item.description}
                pictrueLink={item.pictrueLink}
                videoLink={item.videoLink}
                viewCounter={item.viewCounter}
                category={item.category}
                rating={item.rating}
              ></MainCards>
            );
          }
        })}
    </div>
  );
}

export default SearchList;
