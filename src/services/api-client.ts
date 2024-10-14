import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "20bc020668f94ad4b7482245f2ea84d6",
  },
});
