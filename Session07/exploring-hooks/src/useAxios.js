import axios from 'axios';
import { useState, useEffect } from "react";

export default function useAxios(url) {
    const [data, setData] = useState([]);

    async function getData() {
        const response = axios.get(url);
        const data = await response.then(res => { return res.data });
        setData(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return data;
}