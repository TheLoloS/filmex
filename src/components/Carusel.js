import React, { Component } from "react";

class Carusel extends Component {
  state = {};
  render() {
    return (
      <div className="carousel w-full z-30">
        <div id="slide1" className="carousel-item relative w-full h50vh">
          <img
            alt="main"
            src="https://wck.org.pl/wp-content/uploads/2022/10/PL_BLACK_ADAM_MAIN_Trailer_Main_Retina_1960x1304.jpg"
            className="w-full object-contain z-20"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <img
            alt="main"
            src="https://wck.org.pl/wp-content/uploads/2022/10/PL_BLACK_ADAM_MAIN_Trailer_Main_Retina_1960x1304.jpg"
            className="w-full h50vh absolute z-0 blur-3xl"
          />
        </div>
        <div id="slide2" className="carousel-item relative w-full h50vh">
          <img
            alt="main"
            src="https://fwcdn.pl/nph/1032473/2020/26785_1.8.jpg"
            className="w-full object-contain z-20"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <img
            alt="main"
            src="https://fwcdn.pl/nph/1032473/2020/26785_1.8.jpg"
            className="w-full h50vh absolute z-0 blur-3xl z-10"
          />
        </div>
        <div id="slide3" className="carousel-item relative w-full h50vh">
          <img
            alt="main"
            src="https://a.allegroimg.com/original/118001/832ddf3a49c7a25a1ac513a97781/Plakat-THOR-MILOSC-I-GROM-ORYGINAL"
            className="w-full object-contain  z-20"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <img
            alt="main"
            src="https://a.allegroimg.com/original/118001/832ddf3a49c7a25a1ac513a97781/Plakat-THOR-MILOSC-I-GROM-ORYGINAL"
            className="w-full h50vh absolute z-0 blur-3xl z-10"
          />
        </div>
        <div id="slide4" className="carousel-item relative w-full h50vh">
          <img
            alt="main"
            src="https://cdn1.naekranie.pl/wp-content/uploads/2022%2F02%2F2_621500d5bf989.jpeg"
            className="w-full object-contain  z-20"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <img
            alt="main"
            src="https://cdn1.naekranie.pl/wp-content/uploads/2022%2F02%2F2_621500d5bf989.jpeg"
            className="w-full h50vh absolute z-0 blur-3xl z-10"
          />
        </div>
      </div>
    );
  }
}

export default Carusel;
