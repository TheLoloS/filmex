import LoginForm from "./LoginForm";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ LoginStatus }) {
  const [Search, setSearch] = useState("");

  return (
    <div className="navbar bg-neutral z-50">
      <div className="flex-1">
        <a
          href="https://filmex.thls.pl/"
          className="btn btn-ghost normal-case text-xl"
        >
          Filmex
        </a>
      </div>
      <div className="flex-none gap-2">
        {console.log(LoginStatus)}
        {LoginStatus && (
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
              onChange={(e) => setSearch(e.target?.value)}
            />
          </div>
        )}

        {LoginStatus ? (
          <Link className="btn gap-2 btn-primary" to={"/Search/" + Search}>
            Szukaj
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <button className="btn gap-2 btn-primary">Zaloguj</button>
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Profile Pictrue"
              src="https://placeimg.com/80/80/people"
            />
          </div>
        </label> */}
            <div className="mt-3 p-2 h-96 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-80">
              <LoginForm></LoginForm>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
