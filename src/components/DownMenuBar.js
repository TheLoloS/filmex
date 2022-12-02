// import { Link } from "react-router-dom";
import LiAElement from "./LiAElement";

export default function name() {
  return (
    <div className="navbar bg-base-300 p-0">
      <div className="flex w-full justify-center z-50">
        <ul className="menu menu-horizontal lg:menu-horizontal bg-base-300 min-h-4rem li-finder">
          <li tabIndex="0">
            <span>Film</span>
            <ul className="bg-base-300 p-6">
              <LiAElement src={"wszystko"} type={"film"} />
              <LiAElement src={"komedia"} />
              <LiAElement src={"thriller"} />
              <LiAElement src={"dramat"} />
              <LiAElement src={"melodramat"} />
              <LiAElement src={"fantasy"} />
              <LiAElement src={"fantastycznonaukowy"} />
              <LiAElement src={"kryminał"} />
              <LiAElement src={"horror"} />
              <LiAElement src={"przygoda"} />
              <LiAElement src={"muzyczny"} />
              <LiAElement src={"sensacyjny"} />
              <LiAElement src={"wojenny"} />
              <LiAElement src={"akcja"} />
            </ul>
          </li>
          <li tabIndex="0">
            <span>Serial</span>
            <ul className="bg-base-300 p-6">
              <LiAElement src={"wszystko"} type={"serial"} />
              <LiAElement src={"komedia"} />
              <LiAElement src={"thriller"} />
              <LiAElement src={"dramat"} />
              <LiAElement src={"melodramat"} />
              <LiAElement src={"fantasy"} />
              <LiAElement src={"fantastycznonaukowy"} />
              <LiAElement src={"kryminał"} />
              <LiAElement src={"horror"} />
              <LiAElement src={"przygoda"} />
              <LiAElement src={"muzyczny"} />
              <LiAElement src={"sensacyjny"} />
              <LiAElement src={"wojenny"} />
              <LiAElement src={"akcja"} />
            </ul>
          </li>
          <li tabIndex="0">
            <span>Gry</span>
            <ul className="bg-base-300 p-6">
              <LiAElement src={"wszystko"} type={"gra"} />
              <LiAElement src={"zręcznościowe"} />
              <LiAElement src={"przygodowe"} />
              <LiAElement src={"fabularne"} />
              <LiAElement src={"strategiczne"} />
              <LiAElement src={"symulacyjne"} />
              <LiAElement src={"sportowe"} />
              <LiAElement src={"logiczne"} />
              <LiAElement src={"horror"} />
              <LiAElement src={"edukacyjne"} />
              <LiAElement src={"gry mobilne"} />
            </ul>
          </li>
          <li tabIndex="0">
            <span>Programy</span>
            <ul className="bg-base-300 p-6">
              <LiAElement src={"wszystko"} type={"program"} />
              <LiAElement src={"Windows"} />
              <LiAElement src={"Android"} />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
