import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart"
export const description = "A bar chart with a custom label"
const chartData = [
  { month: "Counterflowing", desktop: 186, mobile: 80 },
  { month: "Illegal parking", desktop: 305, mobile: 200 },
  { month: "Illegal U-turn", desktop: 237, mobile: 120 },
  { month: "Vehicles obstruction", desktop: 120, mobile: 190 },
  { month: "No Helmet", desktop: 200, mobile: 130 },
  { month: "No licensed", desktop: 90, mobile: 140 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#5b71b0",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig
export function ChadChart2() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Bar Chart - Violation | Count</CardTitle>
        <CardDescription>July 2025 - January 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Top violations from the past 7 months <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total cases of violations
        </div>
      </CardFooter>
    </Card>
  )
}
