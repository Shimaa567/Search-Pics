import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WqpTfyGibTBTvxXJxi0rvsQP1YqGbALUfZMok1Bl-WE",
  },
});
