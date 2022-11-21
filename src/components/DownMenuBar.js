import { Link } from "react-router-dom";

export default function name() {
  return (
    <div className="navbar bg-base-300 p-0">
      <div className="flex w-full justify-center z-50">
        <ul className="menu menu-horizontal lg:menu-horizontal bg-base-300 min-h-4rem li-finder">
          <li tabIndex="0">
            <span>Filmy</span>
            <ul className="bg-base-300">
              <li>
                <Link to="/all">Wszystko</Link>
              </li>
              <li>
                <a href="#up">Submenu 2</a>
              </li>
              <li>
                <a href="#up">Submenu 3</a>
              </li>
            </ul>
          </li>
          <li tabIndex="0">
            <span>Seriale</span>
            <ul className="bg-base-300">
              <li>
                <a href="#up">Submenu 1</a>
              </li>
              <li>
                <a href="#up">Submenu 2</a>
              </li>
              <li>
                <a href="#up">Submenu 3</a>
              </li>
            </ul>
          </li>
          <li tabIndex="0">
            <span>Gry</span>
            <ul className="bg-base-300">
              <li>
                <a href="#up">Submenu 1</a>
              </li>
              <li>
                <a href="#up">Submenu 2</a>
              </li>
              <li>
                <a href="#up">Submenu 3</a>
              </li>
            </ul>
          </li>
          <li tabIndex="0">
            <span>Programy</span>
            <ul className="bg-base-300">
              <li>
                <a href="#up">Submenu 1</a>
              </li>
              <li>
                <a href="#up">Submenu 2</a>
              </li>
              <li>
                <a href="#up">Submenu 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}