import React from 'react';

export default function DataBox(props){
    return (
        <>
            <div className="data-box bg-white p-10">
                <h1>Confirmed:{props.confirmedCases}</h1>
                <h2>{props.deaths}</h2>
                <h3>{props}</h3>
            </div>
        </>
    )
}