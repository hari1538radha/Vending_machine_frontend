import axios from "axios";
export const axio = axios.create({
  baseURL: "https://nice-pink-chinchilla-belt.cyclic.app",
  //https://mern-acadamy-app.herokuapp.com
  headers: {
    "X-Custom-Header": "foobar",
    Accept: "application/json",
    "Content-Type": undefined,
  },
});