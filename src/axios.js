import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-d6728.cloudfunctions.net/api"
});

export default instance;
