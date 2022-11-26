import React from "react";
import HandleSubmit from "./HandleLogin";
import { useState } from "react";

const LoginForm = () => {
  const [Login, setLogin] = useState("");
  const [Password, setPassowrd] = useState("");
  return (
    <div className="card flex-shrink-0 w-full h-80 bg-base-100 rounded-none">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Login</span>
          </label>
          <input
            type="text"
            placeholder="Login"
            className="input input-bordered"
            value={Login}
            onInput={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hasło</span>
          </label>
          <input
            type="password"
            placeholder="Hasło"
            className="input input-bordered"
            value={Password}
            onInput={(e) => setPassowrd(e.target.value)}
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Zapomniałeś hasła?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary"
            onClick={() => HandleSubmit(Login, Password)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
