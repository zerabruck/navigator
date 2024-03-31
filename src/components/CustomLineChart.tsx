import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React from 'react'

const CustomLineChart = () => {
    const data = [{name: 'Page A', traffic:'34.333333', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page D', uv: 500, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 600, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 900, pv: 2400, amt: 2400},];

  return (
    <div>
        <LineChart width={900} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
      
    </div>
  )
}

export default CustomLineChart
