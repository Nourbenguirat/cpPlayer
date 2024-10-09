import axios from "axios";

export const fetchAllPlayers = async () => {
    const { data } = await axios.get('http://localhost:6060/Cards/getAll');
    return data;
}

