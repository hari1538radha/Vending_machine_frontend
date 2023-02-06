import axios from "axios";
export const axio = axios.create({
  baseURL: "https://nice-pink-chinchilla-belt.cyclic.app",
  headers: {
    "X-Custom-Header": "foobar",
    Accept: "application/json",
    "Content-Type": undefined,
  },
});
