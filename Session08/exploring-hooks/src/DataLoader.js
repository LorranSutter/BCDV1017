import React from 'react';

import useAxios from './useAxios';

const DataLoader = () => {

    const data = useAxios('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            <ul>
                {
                    data.map(el => (
                        <li key={el.id}>{el.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DataLoader;