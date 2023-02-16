import axios from "axios";

const apiURLs = {
    development: "http://localhost:4000",
    production: "link da api deployada"
}

const api = axios.create({baseURL: apiURLs[process.env.NODE_ENV]}); 
// Nove_env, o próprio node interpreta se o ambiente é develpment ou production.

// An interceptor is a function that intercepts and can modify requests or responses
// The interceptor function takes a single argument, 
// config, which is an object containing the configuration for the outgoing request.
api.interceptors.request.use((config) => { 
    const loggedInUserJSON = localStorage.getItem("loggedInUser");
    const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');
    //If there is no "loggedInUser" key in localStorage, 
    //an empty string is passed to JSON.parse() instead.

    if (parseLoggedInUser.token) {
        config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` };
      }

    return config;
})

//In summary, this code adds an authorization token to outgoing requests if the user is logged in, 
//based on the loggedInUser object stored in the browser's local storage.

export { api };