import axios from "axios";
import { setAuthToken } from "./setAuthToken";

export default function HandleSubmit(login, pass) {
  //reqres registered sample user
  const loginPayload = {
    username: login,
    password: pass,
  };

  axios
    .post("https://dead-red-clownfish-hem.cyclic.app/api/login", loginPayload)
    .then((response) => {
      //get token from response
      const token = response.data.data;
      //   console.log(response.data.data);

      //set JWT token to local
      localStorage.setItem("token", token);

      //set token to axios common header
      setAuthToken(token);

      //redirect user to home page
      window.location.href = "/";
    })
    .catch((err) => console.log(err));
}
