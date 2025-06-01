import axios from "axios";
// If the file is `src/Api/Axios.jsx`
// import { axiosInstance } from "../Api/Axios"; //  CORRECT

const axiosInstance = axios.create({
  //**Local instance of firebase functions */
  // baseURL: "http://127.0.0.1:5001/clone-87e46/us-central1/api",

  //** deployed version of amazon server on render.com */
  baseURL: "https://amazon-api-deploy-jpyx.onrender.com/",
});

export { axiosInstance };
