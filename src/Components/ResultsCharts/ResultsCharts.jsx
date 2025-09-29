import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = 
[
  {
    "id": 1,
    "name": "Alice",
    "physics": 78,
    "chemistry": 82,
    "biology": 75
  },
  {
    "id": 2,
    "name": "Brian",
    "physics": 85,
    "chemistry": 79,
    "biology": 88
  },
  {
    "id": 3,
    "name": "Catherine",
    "physics": 92,
    "chemistry": 90,
    "biology": 95
  },
  {
    "id": 4,
    "name": "David",
    "physics": 46,
    "chemistry": 72,
    "biology": 70
  },
  {
    "id": 5,
    "name": "Emma",
    "physics": 81,
    "chemistry": 55,
    "biology": 80
  },
  {
    "id": 6,
    "name": "Frank",
    "physics": 34,
    "chemistry": 69,
    "biology": 62
  },
  {
    "id": 7,
    "name": "Grace",
    "physics": 89,
    "chemistry": 44,
    "biology": 90
  },
  {
    "id": 8,
    "name": "Henry",
    "physics": 38,
    "chemistry": 63,
    "biology": 70
  },
  {
    "id": 9,
    "name": "Isabella",
    "physics": 55,
    "chemistry": 37,
    "biology": 86
  },
  {
    "id": 10,
    "name": "Jack",
    "physics": 42,
    "chemistry": 76,
    "biology": 94
  }
]


const ResultsCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey="physics" stroke="white"></Line>
                <Line dataKey="chemistry" stroke="orange"></Line>
                <Line dataKey="biology" stroke="red"></Line>

            </LineChart>
            
            <BarChart width={1400} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="physics" fill="red" barSize={30}></Bar>
                <Bar dataKey="chemistry" fill="green" barSize={30}></Bar>
                <Bar dataKey="biology" fill="blue" barSize={30}></Bar>

            </BarChart>


        </div>
    );
};

export default ResultsCharts;
