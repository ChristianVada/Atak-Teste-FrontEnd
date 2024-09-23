import axios from "axios";

const apiUser = axios.create({
  baseURL: "https://atak-teste-backend-production.up.railway.app",
  timeout: 7000,
});

export default apiUser;
