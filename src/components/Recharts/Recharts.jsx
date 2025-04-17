
import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const resultData = [
    {
        "id": 101,
        "name": "Ayesha Khan",
        "bangla": 85,
        "english": 78,
        "math": 92
    },
    {
        "id": 102,
        "name": "Rafi Ahmed",
        "bangla": 73,
        "english": 81,
        "math": 88
    },
    {
        "id": 103,
        "name": "Nila Sultana",
        "bangla": 90,
        "english": 87,
        "math": 94
    },
    {
        "id": 104,
        "name": "Hasan Rahman",
        "bangla": 65,
        "english": 70,
        "math": 75
    },
    {
        "id": 105,
        "name": "Tania Akter",
        "bangla": 88,
        "english": 79,
        "math": 91
    }
]
const Recharts = () => {
    return (
        <div className='m-20'>
            <LineChart width={1000} height={600} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="id"></YAxis>
                <Line dataKey="math" stroke="red"></Line>
                <Line dataKey="bangla" stroke="blue"></Line>
                <Line dataKey="english" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default Recharts;