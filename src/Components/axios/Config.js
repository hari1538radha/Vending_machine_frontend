import axios from "axios";
export const axio = axios.create({
  baseURL: "https://wild-pink-walkingstick-boot.cyclic.app",
  headers: {
    "X-Custom-Header": "foobar",
    Accept: "application/json",
    "Content-Type": undefined,
  },
});
