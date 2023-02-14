import axios from "axios";

const apiURLs = {
    development: "http://localhost:4000",
    production: "link da api deployada"
}

const api = axios.create({baseURL: apiURLs[process.env.NODE_ENV]}); // Nove_env, o próprio node interpreta se o ambiente é develpment ou production.

export { api };