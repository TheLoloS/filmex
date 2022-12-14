import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryInListDiv from "./CategoryInListDiv";
import MainCards from "./MainCards";

function SearchList({ movies }) {
  const params = useParams();

  //   const [ListItems, setListItems] = useState();
  //   movies && console.log(movies);

  return (
    <div className="searchList flex flex-col w-full mainCardsConteiner">
      <CategoryInListDiv />
      {movies &&
        movies.map((item, i) => {
          if (
            item.title.toLowerCase().indexOf(params.title.toLowerCase()) !== -1
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
        })}

      {/* {items.length === 0 && lastItem ? (
        <button className="btn btn-square loading"></button>
      ) : (
        <p>Brak wyników wyszukiwania</p>
      )} */}
    </div>
  );
}

export default SearchList;
