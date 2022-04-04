import {useState,useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) =>{
    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    const fethData = async() =>{
        try {
            const {data: response_data}= await axios.get(url);
            setData(response_data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }
    
    useEffect(() =>{
        fethData();
    }, []
    
    );

    return {data, error, loading};
};

export default useFetch;