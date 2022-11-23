import React from "react";
import { Link } from "react-router-dom";

export default function MainCards({
  id,
  title,
  description,
  pictrueLink,
  videoLink,
  viewCounter,
  category,
  rating,
}) {
  return (
    <div id="card">
      <img src={pictrueLink} alt={title} />
      <div className="move">
        <br />
        <h1 className="text-xl font-semibold">{title}</h1>
        <hr />
        <p>{description}</p>
        <br />
        <p>Kategoria: {category}</p>
        <br />
        <p>
          Ocena:
          <progress
            className="progress progress-primary w-32 bg-white ml-4 mr-4"
            value={rating * 10}
            max="100"
          ></progress>
          {rating}/10
        </p>
        <br />
        <br />
        <div className="flex flex-row flex-nowrap content-center justify-between items-center">
          <p>Odsłony: {viewCounter}</p>
          <Link
            className="btn gap-2 btn-primary"
            to={"/filmex/build/movie/" + id}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            zobacz
          </Link>
        </div>
      </div>
    </div>
  );
}

// this.id = id;
// this.title = title;
// this.description = description;
// this.pictrueLink = pictrueLink;
// this.videoLink = videoLink;
// this.viewCounter = viewCounter;
