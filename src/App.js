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
// import MainCardNoLoginDiv from "./components/MainCardNoLoginDiv";
import CookiesCard from "./components/CookiesCard";
import SearchCategory from "./components/SearchCategory";

export default function App() {
  const [Movies, setMovies] = useState(false);
  const [Cards, setCards] = useState("");
  const [LoginStatus, setLoginStatus] = useState(false);
  const token = localStorage.getItem("token");
  !LoginStatus && token && setLoginStatus(true);
  // if (localStorage.getItem("Cards")) {
  //   setCards(JSON.parse(localStorage.getItem("Cards")));
  // }
  useEffect(() => {
    const data = JSON.parse(
      window.localStorage.getItem("MY_APP_STATE") && false
    );
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
    LoginStatus &&
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
  }, [LoginStatus, setLoginStatus]);

  return (
    <div className="App">
      <Navbar LoginStatus={LoginStatus} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carusel />
              {LoginStatus ? (
                <MainCardsComponent Cards={Cards} />
              ) : (
                <div className="mainCardNoLogin flex justify-center items-center">
                  <div className="card card-side bg-neutral shadow-xl">
                    <div className="card-body text-center">
                      <h2 className="card-title self-center">Zaloguj się!</h2>
                      <p>
                        Zaloguj się, Aby uzyskać dostep do Filmów, Programów,
                        seriali i wiele więcej!
                      </p>
                      <div className="card-actions justify-end"></div>
                    </div>
                  </div>
                </div>
              )}
            </>
          }
        ></Route>
        <Route path="/all" element={<AllList movies={Movies} />}></Route>
        <Route
          path="/movie/:id"
          element={<MoviePage movies={Movies} />}
        ></Route>
        <Route
          path="/AllSearch/:title"
          element={<SearchList movies={Movies} />}
        ></Route>
        <Route
          path="/Search/:type/:category"
          element={<SearchCategory movies={Movies} />}
        ></Route>
        <Route
          path="/Search/:type/"
          element={<SearchCategory movies={Movies} />}
        ></Route>
      </Routes>
      <CookiesCard />
      <Fotter />
    </div>
  );
}
