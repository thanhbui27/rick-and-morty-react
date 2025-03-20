import axios from "axios";

const axiosParam = {
    baseURL: "https://rickandmortyapi.com/api/character",
    timeout: 10000
};

const instance = axios.create(axiosParam);

export default instance;
