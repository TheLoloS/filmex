import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainCards from "./MainCards";

function SearchList({ movies }) {
  const params = useParams();
  //   const [ListItems, setListItems] = useState();
  //   movies && console.log(movies);
  return (
    <div className="searchList flex flex-col w-full mainCardsConteiner">
      <div className="card p-4 w-full">
        <h1 className="card-title self-center text-2xl">
          Wyniki Wyszukiwania:
        </h1>
        <div className="divider" />
        <div className="filterDiv w-full flex nowrap">
          <select className="select select-primary w-1/4 max-w-xs justify-evenly">
            <option selected disabled>
              Typ
            </option>
            <option value="Wszystko">Wszystko</option>
            <option value="Filmy">Filmy</option>
            <option value="Seriale">Seriale</option>
            <option value="Programy">Programy</option>
            <option value="Gry">Gry</option>
            <option value="Aplikacje">Aplikacje</option>
          </select>
          <select className="select select-primary w-1/4 max-w-xs">
            <option selected disabled>
              Kategoria
            </option>
            <option value="komedia">komedia</option>
            <option value="thriller">thriller</option>
            <option value="dramat">dramat</option>
            <option value="melodramat">melodramat</option>
            <option value="fantasy">fantasy</option>
            <option value="fantastycznonaukowy">fantastycznonaukowy</option>
            <option value="kryminał">kryminał</option>
            <option value="horror">horror</option>
            <option value="przygoda">przygoda</option>
            <option value="muzyczny">muzyczny</option>
            <option value="sensacyjny">sensacyjny</option>
            <option value="wojenny">wojenny</option>
            <option value="akcja">akcja</option>
          </select>
          <select className="select select-primary w-1/4 max-w-xs">
            <option selected disabled>
              Sortuj
            </option>
            <option value="akcja">Najczesciej ogladane</option>
            <option value="akcja">Najlepiej oceniane</option>
            <option value="akcja">Najnowsze</option>
          </select>
        </div>
      </div>
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
