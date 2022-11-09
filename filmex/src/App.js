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
    axios.get("http://localhost:3001/api/getmovies").then((res) => {
      this.setState({
        movies: res.data,
      });
      console.log(res.data[0]);
      new MainCards(res.data[0]);
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Carusel></Carusel>
        <DownMenuBar></DownMenuBar>
        <div className="flex flex-col w-full h-screen">
          {/* {console.log(this.state.movies[0])}
          {this.state.movies.map((e) => (
             */}
          <MainCards
            title={this.state.movies[0].title}
            description={this.state.movies[0].description}
            pictrueLink={this.state.movies[0].pictrueLink}
            videoLink={this.state.movies[0].videoLink}
            viewCounter={this.state.movies[0].viewCounter}
            // description={this.state.movies[0].description}
          ></MainCards>
          {/* ))} */}
        </div>
        <Fotter></Fotter>
      </div>
    );
  }
}
