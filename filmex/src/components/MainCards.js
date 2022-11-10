import React, { Component } from "react";

class MainCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="cursor-pointer active:bg-violet-600 card w-48 bg-base-100 shadow-xl mb-4 h-96"
        onClick={() => {
          console.log("aa");
        }}
      >
        <figure>
          <img src={this.props.pictrueLink} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title w-full">{this.props.title}</h2>
          <p className="text-ellipsis overflow-hidden">
            {this.props.description}
          </p>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Fashion</div> */}
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-violet-600"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-violet-600"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-violet-600"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-violet-600"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-violet-600"
              />
            </div>
            <div className="badge badge-outline">{this.props.viewCounter}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainCards;

// this.id = id;
// this.title = title;
// this.description = description;
// this.pictrueLink = pictrueLink;
// this.videoLink = videoLink;
// this.viewCounter = viewCounter;
