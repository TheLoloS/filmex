import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Carusel from "./components/Carusel";
import Fotter from "./components/Fotter";
import MainCards from "./components/MainCards";
import MainCardsComponent from "./components/MainCardsComponent";
import { Route, Routes } from "react-router-dom";
import AllList from "./components/allList";
import MoviePage from "./components/MoviePage";
import SearchList from "./components/SearchList";

export default function App() {
  const [Movies, setMovies] = useState(false);
  const [Cards, setCards] = useState("");
  // if (localStorage.getItem("Cards")) {
  //   setCards(JSON.parse(localStorage.getItem("Cards")));
  // }
  useEffect(() => {
    const data = JSON.parse(
      window.localStorage.getItem("MY_APP_STATE") && false
    );
    console.log(data);
    if (data) {
      setMovies(JSON.parse(data));
      setCards(() =>
        JSON.parse(data).map((item, i) => {
          if (i < 4) {
            return (
              <MainCards
                title={item.title}
                description={item.description}
                pictrueLink={item.pictrueLink}
                videoLink={item.videoLink}
                viewCounter={item.viewCounter}
                category={item.category}
                rating={item.rating}
              ></MainCards>
            );
          } else {
            return null;
          }
        })
      );
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("MY_APP_STATE", JSON.stringify(Movies));
  }, [Movies]);
  // getMovies List
  useEffect(() => {
    axios
      .get("https://dead-red-clownfish-hem.cyclic.app/api/getmovies")
      .then((res) => {
        setMovies(res.data);
        setCards(() =>
          res.data.map((item, i) => {
            if (i < 4) {
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
            } else {
              return null;
            }
          })
        );
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/filmex/build/"
          element={
            <>
              <Carusel />
              <MainCardsComponent Cards={Cards} />
            </>
          }
        ></Route>
        <Route
          path="/filmex/build/all"
          element={<AllList movies={Movies} />}
        ></Route>
        <Route
          path="/filmex/build/movie/:id"
          element={<MoviePage movies={Movies} />}
        ></Route>
        <Route
          path="/filmex/build/Search/:title"
          element={<SearchList movies={Movies} />}
        ></Route>
      </Routes>

      <Fotter />
    </div>
  );
}
