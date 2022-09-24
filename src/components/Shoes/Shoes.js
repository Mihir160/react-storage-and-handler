import React from 'react';
import { multiply } from '../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 66;
    const total = multiply(first , second)
    return (
        <div>
           <h1>Welcome to shoes factory </h1>
           <p>Total shoes: {total}</p> 
        </div>
    );
};

export default Shoes;