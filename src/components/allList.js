import { Link } from "react-router-dom";

export default function allList({ movies }) {
  if (movies) {
    return (
      <div className="w-screen flex justify-center mt-8 mb-8">
        <table className="table w-screen bg-base-300">
          <thead>
            <tr className="bg-base-300">
              {/* <th className="text-center bg-base-300">ID</th> */}
              <th className="bg-base-300 text-center">Okładka</th>
              <th className="bg-base-300 text-center">Tytuł</th>
              {/* <th className="bg-base-300">Opis</th> */}
              {/* <th className="bg-base-300 text-center">Kategoria</th> */}
              {/* <th className="bg-base-300 text-center">Ocena</th> */}
              <th className="text-center bg-base-300">Link</th>
              {/* <th className="text-center bg-base-300">Wyświetlenia</th> */}
            </tr>
          </thead>
          <tbody>
            {movies.map((e, i) => {
              return (
                <tr>
                  {/* <td className="text-center">{i}</td> */}
                  <td className="pt-2 pb-2">
                    <div className="avatar">
                      <div className="w-24 h-32">
                        <img alt="Plakat" src={e.pictrueLink} />
                      </div>
                    </div>
                  </td>
                  <td className="text-center whitespace-normal">{e.title}</td>
                  {/* <td className="text-ellipsis overflow-hidden whitespace-normal">
                    {e.description}
                  </td> */}
                  {/* <td className="text-center">{e.category}</td> */}
                  {/* <td className="text-center">{e.rating}/10</td> */}
                  <td className="text-center">
                    <Link className="btn btn-primary" to={"/filmex/build/movie/" + e.id}>
                      Zobacz!
                    </Link>
                  </td>
                  {/* <td>{e.pictrueLink} </td> */}
                  {/* <td>{e.videoLink} </td> */}
                  {/* <td className="text-center">{e.viewCounter} </td> */}
                  {/* <td>{e. } </td> */}
                </tr>
                // </Link>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
