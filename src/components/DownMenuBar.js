// import { Link } from "react-router-dom";
import LiAElement from "./LiAElement";
import { isMobile } from "react-device-detect";

export default function name() {
  return (
    <div className="navbar bg-base-300 p-0">
      <div className="flex w-full justify-center z-50">
        <ul className="menu menu-horizontal lg:menu-horizontal bg-base-300 min-h-4rem li-finder">
          <li tabIndex="0">
            <span>Film</span>
            <ul
              className={
                isMobile
                  ? "dropdown-content menu p-2 shadow bg-base-200 w-screen"
                  : "bg-base-200 p-6 dropdown-content menu p-2 shadow bg-base-200 rounded-box ulDonwBarMenu"
              }
            >
              <LiAElement src={"wszystko"} type={"film"} toProps={true} />
              <LiAElement src={"komedia"} type={"film"} />
              <LiAElement src={"thriller"} type={"film"} />
              <LiAElement src={"dramat"} type={"film"} />
              <LiAElement src={"melodramat"} type={"film"} />
              <LiAElement src={"fantasy"} type={"film"} />
              <LiAElement src={"fantastycznonaukowy"} type={"film"} />
              <LiAElement src={"kryminał"} type={"film"} />
              <LiAElement src={"horror"} type={"film"} />
              <LiAElement src={"przygoda"} type={"film"} />
              <LiAElement src={"muzyczny"} type={"film"} />
              <LiAElement src={"sensacyjny"} type={"film"} />
              <LiAElement src={"wojenny"} type={"film"} />
              <LiAElement src={"akcja"} type={"film"} />
            </ul>
          </li>
          <li tabIndex="0">
            <span>Serial</span>
            <ul
              className={
                isMobile
                  ? "dropdown-content menu p-2 shadow bg-base-200 w-screen tran-25vw"
                  : "bg-base-200 p-6 dropdown-content menu p-2 shadow bg-base-200 rounded-box ulDonwBarMenu"
              }
            >
              <LiAElement src={"wszystko"} type={"serial"} toProps={true} />
              <LiAElement src={"komedia"} type={"serial"} />
              <LiAElement src={"thriller"} type={"serial"} />
              <LiAElement src={"dramat"} type={"serial"} />
              <LiAElement src={"melodramat"} type={"serial"} />
              <LiAElement src={"fantasy"} type={"serial"} />
              <LiAElement src={"fantastycznonaukowy"} type={"serial"} />
              <LiAElement src={"kryminał"} type={"serial"} />
              <LiAElement src={"horror"} type={"serial"} />
              <LiAElement src={"przygoda"} type={"serial"} />
              <LiAElement src={"muzyczny"} type={"serial"} />
              <LiAElement src={"sensacyjny"} type={"serial"} />
              <LiAElement src={"wojenny"} type={"serial"} />
              <LiAElement src={"akcja"} type={"serial"} />
            </ul>
          </li>
          <li tabIndex="0">
            <span>Gry</span>
            <ul
              className={
                isMobile
                  ? "dropdown-content menu p-2 shadow bg-base-200 w-screen tran-50vw"
                  : "bg-base-200 p-6 dropdown-content menu p-2 shadow bg-base-200 rounded-box ulDonwBarMenu"
              }
            >
              <LiAElement src={"wszystko"} type={"gra"} toProps={true} />
              <LiAElement src={"zręcznościowe"} type={"gra"} />
              <LiAElement src={"przygodowe"} type={"gra"} />
              <LiAElement src={"fabularne"} type={"gra"} />
              <LiAElement src={"strategiczne"} type={"gra"} />
              <LiAElement src={"symulacyjne"} type={"gra"} />
              <LiAElement src={"sportowe"} type={"gra"} />
              <LiAElement src={"logiczne"} type={"gra"} />
              <LiAElement src={"horror"} type={"gra"} />
              <LiAElement src={"edukacyjne"} type={"gra"} />
              <LiAElement src={"gry mobilne"} type={"gra"} />
            </ul>
          </li>
          <li tabIndex="0">
            <span>Programy</span>
            <ul
              className={
                isMobile
                  ? "dropdown-content menu p-2 shadow bg-base-200 w-screen tran-75vw"
                  : "bg-base-200 p-6 dropdown-content menu p-2 shadow bg-base-200 rounded-box ulDonwBarMenu"
              }
            >
              <LiAElement src={"wszystko"} type={"program"} toProps={true} />
              <LiAElement src={"Windows"} type={"program"} />
              <LiAElement src={"Android"} type={"program"} />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
