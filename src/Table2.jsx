import React from "react";

const Table2 = () => {
    const data = [
        {name: '遥',eyeSightLeft:{ label: '左:', value: 1.0 }, eyeSightRight: 1.2},
        {name: 'れな',eyeSightLeft: {label: '左:', value: 0.5},eyeSightRight: 1.2},
    ];

    return (
        <table border="1">
            <thead>
            <tr>
                <th>名前</th>
                <th colSpan={2}>視力</th>
            </tr>
            </thead>
            <tbody>
            {data.map((person) => (
                <tr key={person.name}>
                    <td>{person.name}</td>
                    <td>{person.eyeSightLeft.label} {person.eyeSightLeft.value}</td>
                    <td>{person.eyeSightRight}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table2;