import { useParams } from "react-router-dom";

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
        <img
          src={
            match
              ? match[0].pictrueLink
              : "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif"
          }
          className="max-w-sm rounded-lg shadow-2xl"
          alt="zdj"
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold ">{match && match[0].title}</h1>
          <p className="py-6">{match && match[0].description}</p>

          <br />
          <p>Kategoria: {match[0].category}</p>
          <br />
          <p>
            Ocena:
            <progress
              className="progress progress-primary w-32 bg-white ml-4 mr-4"
              value={match[0].rating * 10}
              max="100"
            ></progress>
            {match[0].rating}/10
          </p>
          <br />

          <div className="">
            <p>Odsłony: {match[0].viewCounter}</p>
          </div>
          <br />
          <br />
          <a
            className="btn btn-primary"
            href={match ? match[0].videoLink : "#"}
          >
            Oglądaj
          </a>
        </div>
      </div>
    </div>
  );
}
