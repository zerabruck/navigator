import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const CustomBarChart = () => {
    const data = [{name: 'Page A', rank: 400, pv: 2400, amt: 2400}, 
    {name: 'Page B', rank: 50, pv: 2400, amt: 2400}, 
    {name: 'Page C', rank: 300, pv: 2400, amt: 2400}, 
    {name: 'Page D', rank: 200, pv: 2400, amt: 2400}, 
    {name: 'Page E', rank: 100, pv: 2400, amt: 2400}, 
];
  return (
    <div>
  <BarChart width={900} height={500} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="rank" fill="#8884d8" barSize={30} />
  </BarChart> 
    </div>
  )
}

export default CustomBarChart
