import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Carusel from "./components/Carusel";
import Fotter from "./components/Fotter";
import DownMenuBar from "./components/DownMenuBar";
import MainCards from "./components/MainCards";

// import api from "./api/posts";

// import logo from "./logo.svg";
// import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Piotr",
      movies: "aa",
    };
  }
  componentDidMount() {
    axios.get("http://192.168.0.213:3001/api/getmovies").then((res) => {
      this.setState({
        movies: res.data,
        cards: res.data.map((item, i) => {
          return (
            <MainCards
              title={item.title}
              description={item.description}
              pictrueLink={item.pictrueLink}
              videoLink={item.videoLink}
              viewCounter={item.viewCounter}
              // description={this.state.movies[0].description}
            ></MainCards>
          );
        }),
      });
      // console.log(res.data[0]);
      // new MainCards(res.data);
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Carusel></Carusel>
        <DownMenuBar></DownMenuBar>
        <div className="flex flex-col w-full h-screen mainCardsConteiner">
          {/* {console.log(this.state.movies[0])}
          {this.state.movies.map((e) => (
             */}
          {/* {[...this.state.movies].forEach((element, i) => { */}

          {this.state.cards}
          {/* ))} */}
        </div>
        <Fotter></Fotter>
      </div>
    );
  }
}
