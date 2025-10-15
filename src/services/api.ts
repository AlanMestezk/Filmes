import axios from "axios";

//https://sujeitoprogramador.com/r-api/?api=filmes

const rotaApi = 'https://sujeitoprogramador.com/'


export const Api = axios.create(
    {
        baseURL: rotaApi
    }
)