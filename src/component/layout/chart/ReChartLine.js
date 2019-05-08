import React, { Component } from 'react'
import { LineChart, Line } from 'recharts';
const data = [
    {name: 'Page A', uv: 400, pv: 2100, amt: 2400 },
    {name: 'Page B', uv: 410, pv: 2200, amt: 2400 },
    {name: 'Page C', uv: 420, pv: 2300, amt: 2400 },
    {name: 'Page D', uv: 430, pv: 2200, amt: 2400 },
    {name: 'Page E', uv: 440, pv: 2100, amt: 2400 },
    {name: 'Page F', uv: 450, pv: 2400, amt: 2400 },
    {name: 'Page G', uv: 460, pv: 2600, amt: 2400 },
    {name: 'Page H', uv: 470, pv: 2700, amt: 2400 },
    {name: 'Page I', uv: 480, pv: 2500, amt: 2400 },
    {name: 'Page J', uv: 440, pv: 2400, amt: 2400 },
    {name: 'Page K', uv: 430, pv: 2300, amt: 2400 },
    {name: 'Page Z', uv: 400, pv: 2200, amt: 2400 },
];

export default class ReChartLine extends Component {
    render() {
        return (
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        )
    }
}
