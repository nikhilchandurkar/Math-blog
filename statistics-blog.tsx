"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calculator, ChevronRight, FileText, Info } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export default function StatisticsBlog() {
  // Normal distribution data
  const normalDistributionData = Array.from({ length: 41 }, (_, i) => {
    const x = -4 + i * 0.2
    const y = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-(x * x) / 2)
    return { x: Number.parseFloat(x.toFixed(1)), y: Number.parseFloat(y.toFixed(4)) }
  })

  // Binomial distribution data
  const binomialDistributionData = Array.from({ length: 11 }, (_, i) => {
    const n = 10
    const p = 0.5
    const k = i
    const coefficient = factorial(n) / (factorial(k) * factorial(n - k))
    const probability = coefficient * Math.pow(p, k) * Math.pow(1 - p, n - k)
    return { k, probability: Number.parseFloat((probability * 100).toFixed(2)) }
  })

  // Poisson distribution data
  const poissonDistributionData = Array.from({ length: 15 }, (_, i) => {
    const lambda = 5
    const k = i
    const probability = (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k)
    return { k, probability: Number.parseFloat((probability * 100).toFixed(2)) }
  })

  // Regression data
  const regressionData = [
    { x: 1, y: 2.1 },
    { x: 2, y: 3.3 },
    { x: 3, y: 4.8 },
    { x: 4, y: 6.1 },
    { x: 5, y: 7.5 },
    { x: 6, y: 8.9 },
    { x: 7, y: 10.2 },
    { x: 8, y: 11.5 },
  ]

  // Scatter plot data with regression line
  const scatterData = [
    { x: 1, y: 2.3 },
    { x: 2, y: 3.1 },
    { x: 3, y: 4.5 },
    { x: 4, y: 5.8 },
    { x: 5, y: 7.2 },
    { x: 6, y: 8.7 },
    { x: 7, y: 9.5 },
    { x: 8, y: 11.2 },
    { x: 2.5, y: 4.2 },
    { x: 3.5, y: 5.3 },
    { x: 4.5, y: 6.7 },
    { x: 5.5, y: 7.8 },
    { x: 6.5, y: 9.1 },
  ]

  // Bias-variance tradeoff data
  const biasVarianceData = [
    { complexity: 1, trainingError: 80, testingError: 75, total: 155 },
    { complexity: 2, trainingError: 60, testingError: 60, total: 120 },
    { complexity: 3, trainingError: 40, testingError: 45, total: 85 },
    { complexity: 4, trainingError: 30, testingError: 35, total: 65 },
    { complexity: 5, trainingError: 20, testingError: 25, total: 45 },
    { complexity: 6, trainingError: 15, testingError: 30, total: 45 },
    { complexity: 7, trainingError: 10, testingError: 40, total: 50 },
    { complexity: 8, trainingError: 5, testingError: 55, total: 60 },
    { complexity: 9, trainingError: 2, testingError: 70, total: 72 },
  ]

  // Correlation examples
  const correlationData = {
    positive: [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 6 },
      { x: 5, y: 7 },
      { x: 6, y: 9 },
      { x: 7, y: 10 },
    ],
    negative: [
      { x: 1, y: 10 },
      { x: 2, y: 9 },
      { x: 3, y: 7 },
      { x: 4, y: 6 },
      { x: 5, y: 4 },
      { x: 6, y: 2 },
      { x: 7, y: 1 },
    ],
    none: [
      { x: 1, y: 5 },
      { x: 2, y: 8 },
      { x: 3, y: 3 },
      { x: 4, y: 9 },
      { x: 5, y: 2 },
      { x: 6, y: 7 },
      { x: 7, y: 4 },
    ],
  }

  // Probability distributions usage
  const distributionUsageData = [
    { name: "Normal", value: 40 },
    { name: "Binomial", value: 25 },
    { name: "Poisson", value: 20 },
    { name: "Exponential", value: 10 },
    { name: "Others", value: 5 },
  ]

  // COLORS
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Statistics and Probability for Data Science, Machine Learning, and AI
        </h1>
        <p className="text-xl text-muted-foreground">A comprehensive guide from fundamentals to advanced concepts</p>
      </header>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Beginner Concepts</CardTitle>
            <BookOpen className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Descriptive Statistics
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Basic Probability
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Data Visualization
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Intermediate Concepts</CardTitle>
            <Calculator className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Probability Distributions
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Hypothesis Testing
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Regression Analysis
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Advanced Concepts</CardTitle>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Bayesian Statistics
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Monte Carlo Simulations
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Statistical ML Concepts
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Descriptive Statistics</h2>
        <p className="mb-6">
          Descriptive statistics help us understand and summarize our data through measures of central tendency and
          dispersion. These fundamental concepts form the basis for more advanced statistical analysis.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Measures of Central Tendency</CardTitle>
              <CardDescription>These measures tell us about the "middle" or "center" of our data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Mean (Average)</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    The sum of all values divided by the number of values.
                  </p>
                  <div className="bg-muted p-2 rounded-md font-mono text-sm">μ = (Σx) / n</div>
                </div>
                <div>
                  <h4 className="font-medium">Median</h4>
                  <p className="text-sm text-muted-foreground mb-1">The middle value when data is arranged in order.</p>
                  <div className="bg-muted p-2 rounded-md text-sm">
                    <p>For odd n: middle value</p>
                    <p>For even n: average of two middle values</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Mode</h4>
                  <p className="text-sm text-muted-foreground">The most frequently occurring value in the dataset.</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-500" />
                    Real-world Example
                  </h4>
                  <p className="text-sm">
                    In a neighborhood where most people earn $40,000-$60,000, but a few earn millions, the median income
                    (e.g., $52,000) better represents the typical resident than the mean, which would be skewed by the
                    millionaires.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Measures of Dispersion</CardTitle>
              <CardDescription>These measures tell us how spread out our data is</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Variance</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    Measures how far each number in the set is from the mean.
                  </p>
                  <div className="bg-muted p-2 rounded-md font-mono text-sm">σ² = Σ(x - μ)² / n</div>
                </div>
                <div>
                  <h4 className="font-medium">Standard Deviation</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    The square root of the variance. It's in the same units as the original data.
                  </p>
                  <div className="bg-muted p-2 rounded-md font-mono text-sm">σ = √(Σ(x - μ)² / n)</div>
                </div>
                <div>
                  <h4 className="font-medium">Range and Interquartile Range (IQR)</h4>
                  <p className="text-sm text-muted-foreground">
                    Range: The difference between the maximum and minimum values.
                    <br />
                    IQR: The range of the middle 50% of the data (Q3 - Q1).
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-500" />
                    Real-world Example
                  </h4>
                  <p className="text-sm">
                    Two neighborhoods might have the same average home price of $300,000, but one might have homes
                    ranging from $250,000 to $350,000 (low standard deviation), while another might have homes from
                    $100,000 to $500,000 (high standard deviation).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Probability Distributions</h2>

        <Tabs defaultValue="normal" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="normal">Normal Distribution</TabsTrigger>
            <TabsTrigger value="binomial">Binomial Distribution</TabsTrigger>
            <TabsTrigger value="poisson">Poisson Distribution</TabsTrigger>
          </TabsList>

          <TabsContent value="normal" className="p-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Normal Distribution</h3>
                <p className="mb-4">
                  The normal distribution is a bell-shaped curve that describes many natural phenomena. It's defined by
                  its mean (μ) and standard deviation (σ).
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4">
                  f(x) = (1 / (σ√(2π))) * e^(-(x-μ)²/(2σ²))
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Key properties:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mean = Median = Mode</li>
                    <li>Symmetric around the mean</li>
                    <li>68% of data falls within 1σ of the mean</li>
                    <li>95% of data falls within 2σ of the mean</li>
                    <li>99.7% of data falls within 3σ of the mean</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
                  <h4 className="font-medium flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-500" />
                    Real-world Examples
                  </h4>
                  <p className="text-sm">
                    Height, weight, IQ scores, measurement errors, and many natural phenomena follow a normal
                    distribution.
                  </p>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={normalDistributionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="x"
                      label={{ value: "Standard Deviations from Mean", position: "insideBottom", offset: -5 }}
                    />
                    <YAxis label={{ value: "Probability Density", angle: -90, position: "insideLeft" }} />
                    <Tooltip formatter={(value) => value.toFixed(4)} />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="binomial" className="p-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Binomial Distribution</h3>
                <p className="mb-4">
                  The binomial distribution models the number of successes in a fixed number of independent trials, each
                  with the same probability of success.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4">
                  P(X = k) = (n choose k) * p^k * (1-p)^(n-k)
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Key properties:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Fixed number of trials (n)</li>
                    <li>Each trial is independent</li>
                    <li>Each trial has the same probability of success (p)</li>
                    <li>Only two possible outcomes (success/failure)</li>
                    <li>Mean = np</li>
                    <li>Variance = np(1-p)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
                  <h4 className="font-medium flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-500" />
                    Real-world Example
                  </h4>
                  <p className="text-sm">
                    The probability of getting exactly 7 heads in 10 coin flips, or the number of defective items in a
                    batch of 100.
                  </p>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={binomialDistributionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="k"
                      label={{ value: "Number of Successes (k)", position: "insideBottom", offset: -5 }}
                    />
                    <YAxis label={{ value: "Probability (%)", angle: -90, position: "insideLeft" }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="probability" fill="#82ca9d">
                      {binomialDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="poisson" className="p-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Poisson Distribution</h3>
                <p className="mb-4">
                  The Poisson distribution models the number of events occurring in a fixed interval of time or space,
                  assuming these events occur independently and at a constant average rate.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4">P(X = k) = (λ^k * e^(-λ)) / k!</div>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Key properties:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Events occur independently</li>
                    <li>Events occur at a constant average rate (λ)</li>
                    <li>Events occur in a fixed interval of time or space</li>
                    <li>Mean = λ</li>
                    <li>Variance = λ</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
                  <h4 className="font-medium flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-500" />
                    Real-world Examples
                  </h4>
                  <p className="text-sm">
                    The number of customers arriving at a store in an hour, the number of calls received by a call
                    center, or the number of defects in a manufactured product.
                  </p>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={poissonDistributionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="k"
                      label={{ value: "Number of Events (k)", position: "insideBottom", offset: -5 }}
                    />
                    <YAxis label={{ value: "Probability (%)", angle: -90, position: "insideLeft" }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="probability" fill="#8884d8">
                      {poissonDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Correlation & Regression</h2>

        <Tabs defaultValue="correlation" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="correlation">Correlation</TabsTrigger>
            <TabsTrigger value="regression">Regression</TabsTrigger>
          </TabsList>

          <TabsContent value="correlation" className="p-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Correlation</h3>
                <p className="mb-4">
                  Correlation measures the strength and direction of the relationship between two variables.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4">
                  r = Σ((x - μx)(y - μy)) / (σx * σy)
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Key properties:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>r = 1: Perfect positive correlation</li>
                    <li>r = 0: No correlation</li>
                    <li>r = -1: Perfect negative correlation</li>
                    <li>Correlation does not imply causation</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
                  <h4 className="font-medium flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-500" />
                    Real-world Example
                  </h4>
                  <p className="text-sm">
                    There's a positive correlation between hours studied and test scores, but this doesn't mean studying
                    causes higher scores (though it likely contributes). Other factors like prior knowledge could
                    influence both variables.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="h-32">
                  <p className="text-sm font-medium mb-1">Positive Correlation</p>
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" name="x" />
                      <YAxis type="number" dataKey="y" name="y" />
                      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                      <Scatter name="Values" data={correlationData.positive} fill="#8884d8" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
                <div className="h-32">
                  <p className="text-sm font-medium mb-1">Negative Correlation</p>
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" name="x" />
                      <YAxis type="number" dataKey="y" name="y" />
                      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                      <Scatter name="Values" data={correlationData.negative} fill="#82ca9d" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
                <div className="h-32">
                  <p className="text-sm font-medium mb-1">No Correlation</p>
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" name="x" />
                      <YAxis type="number" dataKey="y" name="y" />
                      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                      <Scatter name="Values" data={correlationData.none} fill="#ffc658" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="regression" className="p-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Linear Regression</h3>
                <p className="mb-4">
                  Linear regression models the relationship between a dependent variable and one or more independent
                  variables using a linear equation.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4">y = β₀ + β₁x + ε</div>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Where:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>y is the dependent variable</li>
                    <li>x is the independent variable</li>
                    <li>β₀ is the y-intercept</li>
                    <li>β₁ is the slope</li>
                    <li>ε is the error term</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
                  <h4 className="font-medium flex items-center">
                    <Info className="h-4 w-4 mr-2 text-blue-500" />
                    Real-world Example
                  </h4>
                  <p className="text-sm">
                    Predicting house prices based on square footage, where house price is the dependent variable (y) and
                    square footage is the independent variable (x).
                  </p>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="number"
                      dataKey="x"
                      name="x"
                      label={{ value: "Independent Variable (x)", position: "insideBottom", offset: -10 }}
                    />
                    <YAxis
                      type="number"
                      dataKey="y"
                      name="y"
                      label={{ value: "Dependent Variable (y)", angle: -90, position: "insideLeft" }}
                    />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter name="Data Points" data={scatterData} fill="#8884d8" />
                    <Line
                      type="monotone"
                      dataKey="y"
                      data={regressionData}
                      stroke="#ff7300"
                      dot={false}
                      activeDot={false}
                      strokeWidth={2}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Bias-Variance Tradeoff</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Understanding the Tradeoff</h3>
            <p className="mb-4">
              The bias-variance tradeoff is a central concept in machine learning that balances a model's ability to fit
              the training data (low bias) with its ability to generalize to new data (low variance).
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p className="mb-2">Key concepts:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>High bias (underfitting):</strong> Model is too simple and misses important patterns in the
                  data
                </li>
                <li>
                  <strong>High variance (overfitting):</strong> Model is too complex and learns noise in the training
                  data
                </li>
                <li>
                  <strong>Total error = Bias² + Variance + Irreducible Error</strong>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium flex items-center">
                <Info className="h-4 w-4 mr-2 text-blue-500" />
                Real-world Example
              </h4>
              <p className="text-sm">
                A simple linear model might underfit housing price data by missing the relationship between location and
                price (high bias). A complex model with many parameters might perfectly fit training data but fail on
                new houses because it learned patterns specific to the training data (high variance).
              </p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={biasVarianceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="complexity"
                  label={{ value: "Model Complexity", position: "insideBottom", offset: -5 }}
                />
                <YAxis label={{ value: "Error", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="trainingError"
                  name="Training Error (Bias)"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="testingError"
                  name="Testing Error (Variance)"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
                <Line type="monotone" dataKey="total" name="Total Error" stroke="#ff7300" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Bayes' Theorem</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Understanding Bayes' Theorem</h3>
            <p className="mb-4">
              Bayes' Theorem allows us to update our beliefs based on new evidence. It's a fundamental concept in
              probability theory and statistics.
            </p>
            <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4">P(A|B) = [P(B|A) × P(A)] / P(B)</div>
            <div className="text-sm text-muted-foreground mb-4">
              <p className="mb-2">Where:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>P(A|B) is the probability of A given B (posterior)</li>
                <li>P(B|A) is the probability of B given A (likelihood)</li>
                <li>P(A) is the probability of A (prior)</li>
                <li>P(B) is the probability of B (evidence)</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium flex items-center">
                <Info className="h-4 w-4 mr-2 text-blue-500" />
                Medical Diagnosis Example
              </h4>
              <p className="text-sm">
                If a test for a disease is 99% accurate (sensitivity), but the disease only affects 1% of the
                population, what's the probability that a person with a positive test result actually has the disease?
              </p>
              <div className="mt-2 text-sm">
                <p>
                  <strong>Given:</strong>
                </p>
                <ul className="list-disc pl-5">
                  <li>P(Positive|Disease) = 0.99 (sensitivity)</li>
                  <li>P(Disease) = 0.01 (prevalence)</li>
                  <li>P(Positive|No Disease) = 0.01 (false positive rate)</li>
                </ul>
                <p className="mt-2">
                  <strong>Using Bayes' Theorem:</strong>
                </p>
                <p>P(Disease|Positive) = [P(Positive|Disease) × P(Disease)] / P(Positive)</p>
                <p>P(Disease|Positive) = [0.99 × 0.01] / [0.99 × 0.01 + 0.01 × 0.99]</p>
                <p>P(Disease|Positive) ≈ 0.5 or 50%</p>
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Applications of Bayes' Theorem</CardTitle>
                <CardDescription>How Bayes' Theorem is used in AI and Data Science</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Spam Filtering</h4>
                    <p className="text-sm text-muted-foreground">
                      Email spam filters use Bayes' Theorem to calculate the probability that an email is spam given
                      that it contains certain words.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Medical Diagnosis</h4>
                    <p className="text-sm text-muted-foreground">
                      Doctors use Bayesian reasoning to update the probability of a diagnosis based on test results.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Recommendation Systems</h4>
                    <p className="text-sm text-muted-foreground">
                      Streaming services use Bayesian methods to recommend content based on viewing history.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Naive Bayes classifiers use Bayes' Theorem for text classification, sentiment analysis, and more.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Distribution of Applications</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={distributionUsageData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {distributionUsageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Real-World Applications in AI & Data Science</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommendation Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Netflix and Amazon use collaborative filtering and matrix factorization to recommend products based on
                user behavior and preferences.
              </p>
              <div className="bg-muted p-3 rounded-md text-sm">
                <p className="font-medium">Statistical Concepts Used:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Correlation analysis</li>
                  <li>Bayesian methods</li>
                  <li>Matrix factorization</li>
                  <li>Clustering algorithms</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fraud Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Banks use anomaly detection to identify unusual transactions that deviate from a customer's normal
                spending pattern.
              </p>
              <div className="bg-muted p-3 rounded-md text-sm">
                <p className="font-medium">Statistical Concepts Used:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Outlier detection</li>
                  <li>Probability distributions</li>
                  <li>Statistical hypothesis testing</li>
                  <li>Time series analysis</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Medical Diagnosis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                AI systems use Bayesian networks to calculate the probability of different diseases based on symptoms
                and test results.
              </p>
              <div className="bg-muted p-3 rounded-md text-sm">
                <p className="font-medium">Statistical Concepts Used:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Bayes' Theorem</li>
                  <li>Conditional probability</li>
                  <li>Sensitivity and specificity</li>
                  <li>ROC curves and AUC</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

// Helper function for factorial calculation
function factorial(n: number): number {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}

