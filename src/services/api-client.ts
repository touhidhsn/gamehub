import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "688388b321f64b5486d56a26932629af",
  },
});
