import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import type { ChartConfig } from "./ui/chart"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"
import { useState } from "react"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const chartData = [
  { month: "January", desktop: 86 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 137 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 20 },
  { month: "August", desktop: 190 },
  { month: "", desktop: 30 },
]

const chartConfig = {
  desktop: {
    label: "Rate",
    color: "#487ca8",
  },
} satisfies ChartConfig

const ShadChart = () => {
  const [key,setKey] = useState(0);
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#RadicalChart",{
      scrollTrigger:{
        trigger:"#RadicalChart",
        start:"top bottom",
        onEnter:()=>ReAnimate(),
      }
    })
  });

  const ReAnimate = () => {
    setKey(prevKey => prevKey + 1);
  }
    return (
        <ChartContainer key={key} config={chartConfig} className="w-full h-[70%]"> 
            <AreaChart data={chartData}>
                <CartesianGrid vertical={false} stroke="#000000" strokeOpacity={0.5} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={14}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                dataKey="desktop"
                type="linear"  // This makes it linear!
                fill="var(--color-desktop)"
                fillOpacity={0.5}
                stroke="var(--color-desktop)"
                />
            </AreaChart>
        </ChartContainer>
    );
};

export default ShadChart;