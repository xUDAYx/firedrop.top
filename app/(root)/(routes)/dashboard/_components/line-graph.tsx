'use client'
import { useTheme } from 'next-themes'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'
import { light_theme } from '@/lib/theme-constant'
import { User } from 'lucide-react'

export type LineGraphProps = {
  data: { month: string; users: number }[]
}

export default function LineGraph({ data }: LineGraphProps) {
  const { theme } = useTheme()

  return (
    <div className="bg-secondary dark:bg-secondary/50 shadow flex w-full flex-col gap-3 rounded-lg p-5">
      <section className="flex justify-between gap-2 pb-2">
        <p>Number Of Users</p>
        <User className="h-4 w-4" />
      </section>
      <ResponsiveContainer width={'100%'} height={350}>
        <LineChart
          data={data}
          margin={{ top: 0, left: -15, right: 0, bottom: 0 }}
        >
          <Line
            type="monotone"
            dataKey="users"
            fill="hsl(var(--primary))"
            width={50}
          />
          <XAxis
            dataKey={'month'}
            tickLine={false}
            axisLine={true}
            stroke={`${theme === light_theme ? '#000' : '#fff'}`}
            fontSize={13}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis
            dataKey={'users'}
            tickLine={false}
            axisLine={true}
            stroke={`${theme === light_theme ? '#000' : '#fff'}`}
            fontSize={13}
            padding={{ top: 0, bottom: 0 }}
            allowDecimals={false}
          />
          <CartesianGrid
            stroke={`${theme === light_theme ? '#000' : '#fff'}`}
            strokeDasharray="2 2"
            className="opacity-25"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
