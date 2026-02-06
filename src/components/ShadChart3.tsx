
import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart"
export const description = "A radar chart with dots"
import { useState } from "react"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 59 },
  { month: "June", desktop: 214 },
]
const chartConfig = {
  desktop: {
    label: "user",
    color: "#57b4c9",
  },
} satisfies ChartConfig
export function ShadChart3() {
  const [key,setKey] = useState(0);
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#CobChart",{
      scrollTrigger:{
        trigger:"#CobChart",
        start:"bottom bottom",
        onEnter:()=>ReAnimate(),
      }
    })
  });

  const ReAnimate = () => {
    setKey(prevKey => prevKey + 1);
  }

  return (
    <div id="CobChart" className="w-[30%]">
      <CardHeader className="items-center">
       
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          key={key}
          config={chartConfig}
          className="mx-auto aspect-square max-h-62.5"
        >
          <RadarChart data={chartData}  margin={{ right: 80, left: 20 }}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid stroke="#000000" strokeOpacity={0.3}/>
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          approximately 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          June - January 2026
        </div>
      </CardFooter>
    </div>
  )
}
