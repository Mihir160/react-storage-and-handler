import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../utilities/calculate';
const Cosmetics = () => {
    // const first = 55;
    // const second = 66;
    // const total = add(first , second)
   
//    const cosmetics = [
//     {id: 1, name: 'Alta', price: 100},
//     {id: 2, name: 'palis', price: 200},
//     {id: 3, name: 'malis', price: 300},
//     {id: 4, name: 'balis', price: 400},
//     {id: 5, name: 'nalis', price: 500},
//    ]

//    1st way json  
//    const cosmetics = [
//     {
//       "id": "632ee6cc94e2866ea0d24bca",
//       "price": 192,
//       "name": "Annette Pollard"
//     },
//     {
//       "id": "632ee6cc20c506cd7312034f",
//       "price": 159,
//       "name": "Violet Short"
//     },
//     {
//       "id": "632ee6cc7996ed6d7b57807a",
//       "price": 540,
//       "name": "Sharron Rodriquez"
//     },
//     {
//       "id": "632ee6cc78a45db2ad7b5916",
//       "price": 75,
//       "name": "Lessie Juarez"
//     },
//     {
//       "id": "632ee6ccafbbe7934423385e",
//       "price": 572,
//       "name": "Rosalinda Browning"
//     },
//     {
//       "id": "632ee6cc4429e379ce6a36b8",
//       "price": 413,
//       "name": "Martin Daniels"
//     }
//   ]


const [cosmetic, setCosmetic] = useState([])
// second system hoche je data public folder json file create kore se khane theke fetch kora
useEffect( ()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmetic(data))
} ,[])
    return (
        <div>
            <h1>Welcome to cosmetic store</h1>
            {/* <p>total: {total}</p> */}
            {
                cosmetic.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;