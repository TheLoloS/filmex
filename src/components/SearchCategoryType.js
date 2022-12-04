import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryInListDiv from "./CategoryInListDiv";
import MainCards from "./MainCards";

function SearchCategory({ movies }) {
  const params = useParams();
  //   const [ListItems, setListItems] = useState();
  //   movies && console.log(movies);
  return (
    <div className="searchList flex flex-col w-full mainCardsConteiner">
      <CategoryInListDiv />
      {movies &&
        movies.map((item, i) => {
          if (item.type) {
            // console.log(item.type, params.type);
            if (
              item.type.toLowerCase().indexOf(params.type.toLowerCase()) !== -1
            ) {
              // console.log("udało sie");
              if (
                item.category
                  .toLowerCase()
                  .indexOf(params.category.toLowerCase()) !== -1
              ) {
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
            }
          }
        })}
    </div>
  );
}

export default SearchCategory;
