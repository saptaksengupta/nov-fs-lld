import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';

export default function CallBackExample() { // re-rendered

    const [term, setTerm] = useState("asd");
    
    // const onItemClicked = () => {
    //     console.log("Item Clicked!!!");
    // }

    const onItemClicked = useCallback(() => {
        console.log("Item Clicked!!!");
    }, [term]);


    //bad usecase.
    // const onItemClicked = useCallback(() => {
    //     console.log("Item Clicked!!!");
    // }, []);

    return (
        <div>
            <BigList term={term} onItemClicked={onItemClicked} />
        </div>
    )
}

const BigList = ({ term, onItemClicked }) => {
    // term
    // onItemClicked
    const items = getSearchedItems(term);
    const itemMap = (item, index) => <div key={index} onClick={onItemClicked}> {item}</div>;
    return (
        <div>
            {
                items.map(itemMap)
            }
        </div>
    )
}


const getSearchedItems = () => {
    return [
        "123213",
        "ausydtad",
        "0oausdas8d",
        "0987zxcf07c87",
        "123213",
        "ausydtad",
        "0oausdas8d",
        "0987zxcf07c87",
        "123213",
        "ausydtad",
        "0oausdas8d",
        "0987zxcf07c87"
    ]
} 