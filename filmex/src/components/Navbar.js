import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar bg-neutral z-50">
        <div className="flex-1">
          <a
            href="http://localhost:3000/"
            className="btn btn-ghost normal-case text-xl"
          >
            Filmex
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Profile Pictrue"
                  src="https://placeimg.com/80/80/people"
                />
              </div>
            </label>
            <div className="mt-3 p-2 h-96 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-80">
              <LoginForm></LoginForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
