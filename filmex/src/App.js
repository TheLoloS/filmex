import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Carusel from "./components/Carusel";
import Fotter from "./components/Fotter";
import DownMenuBar from "./components/DownMenuBar";
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
    axios.get("http://localhost:3001/api/getmovies").then((res) =>
      this.setState({
        movies: res.data,
      })
    );
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Carusel></Carusel>
        <div className="navbar bg-base-300">
          <DownMenuBar></DownMenuBar>
        </div>
        {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center z-10">
          content
        </div> */}
        {/* <p>{this.state.movies[0].title}</p>
        <div className="card card-side bg-base-100 shadow-xl z-10">
          <figure>
            <img src="https://placeimg.com/200/280/arch" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div> */}
        <Fotter></Fotter>
      </div>
    );
  }
}
