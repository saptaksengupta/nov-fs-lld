import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const makeApiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

export default function FetchData({zoomIn}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        //connection.connect().then()
        makeApiCall().then(resp => {
            setData(resp);
        });
    }, []); // it will run this effect only one time. 

    // useEffect(() => {
    //     //connection.connect().then()
    //     makeApiCall().then(resp => {
    //         setData(resp);
    //     });
    // }, [zoomIn]); // it will run this effect only one time. 

    // useEffect(() => {}) // it will run effet every time this component get re rendered. 

    return (
        <>  
            <p>Name</p>
            {(data !== null) ? <div>{data}</div> : (<div>Fetching data...</div>)}
            <div>class</div>
        </>
    )
}
