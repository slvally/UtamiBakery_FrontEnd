import React, {useState} from "react";
import axios from "axios";
import { useEffect } from "react";
export const test = () => {
    const [Data,setData] = useState([]);
    const getProductData = () => {
        const url = 'http://localhost:5000/products';
        axios.get(url)
        .then(response => {
            const result = response.data;
            const {status, message, data} = result;
            if(status !== "success"){
                alert(message, status);
            }else{
                setData(data);
                console.log(data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        getProductData();
    },[])
}
  