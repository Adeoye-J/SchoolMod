"use client"

import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "Jan",
        income: 15000,
        expense: 5000,
    },
    {
        name: "Feb",
        income: 13500,
        expense: 6500,
    },
    {
        name: "Mar",
        income: 14700,
        expense: 12100,
    },
    {
        name: "Apr",
        income: 24000,
        expense: 6000,
    },
    {
        name: "May",
        income: 13000,
        expense: 23000,
    },
    {
        name: "Jun",
        income: 17500,
        expense: 4500,
    },
    {
        name: "Jul",
        income: 15000,
        expense: 3000,
    },
    {
        name: "Aug",
        income: 18400,
        expense: 6500,
    },
    {
        name: "Sep",
        income: 12000,
        expense: 7000,
    },
    {
        name: "Oct",
        income: 15000,
        expense: 9900,
    },
    {
        name: "Nov",
        income: 14500,
        expense: 4500,
    },
    {
        name: "Dec",
        income: 21000,
        expense: 12000,
    },
]

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className="flex items-center justify-between">
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
                <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={10} />
                <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={10} />
                <Tooltip contentStyle={{borderRadius: "10px", borderColor:"lightgray"}} />
                <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:"10px", paddingBottom:"20px"}} />
                <Line type="monotone" dataKey="income" stroke='#FAE27C' strokeWidth={5} />
                <Line type="monotone" dataKey="expense" stroke='#C3EBFA' strokeWidth={5} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart