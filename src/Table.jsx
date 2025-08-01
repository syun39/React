import React from 'react';

const Table = () => {
    const data = [
        // 名前、年齢、身長、体重
        { name: 'ミク', age: 16, stature: 158, weight:42 },
        { name: 'リン', age: 14, stature: 152, weight:43 },
        { name: 'ルカ', age: 20, stature: 162, weight:45},
    ];


    return (
        <table border="1">
            <thead>
            <tr>
                <th>名前</th>
                <th>年齢</th>
                <th>身長</th>
                <th>体重</th>
            </tr>
            </thead>
            <tbody>
            {data.map((person) => (
                <tr key={person.name}>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.stature}</td>
                    <td>{person.weight}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};


export default Table;