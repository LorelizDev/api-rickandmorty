import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

// GET
export const getCharacters = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.results;
    } catch (error) {
        return console.log("Error fetching data:", error)
    }
};