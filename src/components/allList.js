import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

export default function allList({ movies }) {
  if (movies) {
    if (isMobile) {
      return (
        <div className="w-screen flex justify-center mt-8 mb-8">
          <table className="table w-screen bg-base-300">
            <thead>
              <tr className="bg-base-300">
                <th className="bg-base-300 text-center">Okładka</th>
                <th className="bg-base-300 text-center">Tytuł</th>
                <th className="text-center bg-base-300">Link</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((e, i) => {
                return (
                  <tr>
                    <td className="pt-2 pb-2 text-center">
                      <div className="avatar">
                        <div className="w-24 h-32">
                          <img alt="Plakat" src={e.pictrueLink} />
                        </div>
                      </div>
                    </td>
                    <td className="text-center whitespace-normal">{e.title}</td>
                    <td className="text-center">
                      <Link className="btn btn-primary" to={"/movie/" + e.id}>
                        Zobacz!
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="w-screen flex justify-center mt-8 mb-8">
          <table className="table w-screen bg-base-300">
            <thead>
              <tr className="bg-base-300">
                <th className="text-center bg-base-300">ID</th>
                <th className="bg-base-300 text-center">Okładka</th>
                <th className="bg-base-300 text-center">Tytuł</th>
                <th className="bg-base-300">Opis</th>
                <th className="bg-base-300 text-center">Kategoria</th>
                <th className="bg-base-300 text-center">Ocena</th>
                <th className="text-center bg-base-300">Link</th>
                <th className="text-center bg-base-300">Wyświetlenia</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((e, i) => {
                return (
                  <tr>
                    <td className="text-center">{i}</td>
                    <td className="pt-2 pb-2 text-center">
                      <div className="avatar">
                        <div className="w-24 h-32">
                          <img alt="Plakat" src={e.pictrueLink} />
                        </div>
                      </div>
                    </td>
                    <td className="text-center whitespace-normal">{e.title}</td>
                    <td className="text-ellipsis overflow-hidden whitespace-normal">
                      {e.description}
                    </td>
                    <td className="text-center">{e.category}</td>
                    <td className="text-center">{e.rating}/10</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-primary"
                        to={"/filmex/build/movie/" + e.id}
                      >
                        Zobacz!
                      </Link>
                    </td>
                    <td className="text-center">{e.viewCounter} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
