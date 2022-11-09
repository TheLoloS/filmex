import React, { Component } from "react";

class MainCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card w-48 bg-base-100 shadow-xl ">
        <figure>
          <img src={this.props.pictrueLink} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {this.props.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-ellipsis overflow-hidden">
            {this.props.description}
          </p>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Fashion</div> */}
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
