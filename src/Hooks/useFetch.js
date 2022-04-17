import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {
    const [dataArray, setDataArray]= useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setDataArray);
    },[url])
    return dataArray;
};

export default useFetch;