import { useParams } from "react-router-dom";
import { useState } from "react";

export default function MoviePage({ movies }) {
  const params = useParams();
  var match = false;
  if (movies) {
    match = movies.filter((entry) => {
      return entry.id === params.id;
    });
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {match ? (
          <img
            src={match[0].pictrueLink}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="zdj"
          />
        ) : (
          <button className="btn btn-square loading"></button>
        )}
        <div className="text-center">
          <h1 className="text-4xl font-bold ">{match && match[0].title}</h1>
          <p className="py-6">{match && match[0].description}</p>

          <br />
          <p>Kategoria: {match && match[0].category}</p>
          <br />
          <p>
            Ocena:
            <progress
              className="progress progress-primary w-32 bg-white ml-4 mr-4"
              value={match && match[0].rating * 10}
              max="100"
            ></progress>
            {match && match[0].rating}/10
          </p>
          <br />

          <div className="">
            <p>Odsłony: {match ? match[0].viewCounter : 50}</p>
          </div>
          <br />
          <br />

          <label
            htmlFor="my-modal-6"
            className="btn btn-primary"
            onClick={() => {
              document
                .querySelector("#modalHref")
                .setAttribute("href", match[0].videoLink.toString());
              document.querySelector("#modalHref").innerHTML =
                (match && match[0].type === "serial") ||
                (match && match[0].type === "film")
                  ? "Oglądaj"
                  : "Pobierz";
            }}
          >
            {(match && match[0].type === "serial") ||
            (match && match[0].type === "film")
              ? "Oglądaj"
              : "Pobierz"}
          </label>
        </div>
      </div>
    </div>
  );
}
