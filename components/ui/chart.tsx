import type React from "react"

interface ChartData {
  [key: string]: number | string
}

interface ChartProps {
  data: ChartData[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number | string) => string
  showLegend?: boolean
  showGridLines?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  curveType?: string
}

export const BarChart: React.FC<ChartProps> = ({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  showLegend,
  showGridLines,
  showXAxis,
  showYAxis,
}) => {
  return (
    <div>
      {/* Placeholder for BarChart */}
      BarChart Component
    </div>
  )
}

export const LineChart: React.FC<ChartProps> = ({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  showLegend,
  showGridLines,
  showXAxis,
  showYAxis,
  curveType,
}) => {
  return (
    <div>
      {/* Placeholder for LineChart */}
      LineChart Component
    </div>
  )
}

export const PieChart: React.FC<ChartProps> = ({ data, index, categories, colors, valueFormatter }) => {
  return (
    <div>
      {/* Placeholder for PieChart */}
      PieChart Component
    </div>
  )
}

