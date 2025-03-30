"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Info,
  Calculator,
  ChevronRight,
  AlertTriangle,
  Brain,
  PieChart,
  TrendingUp,
  Lightbulb,
  Zap,
  Database,
  Car,
  Image,
  Shield,
  MessageSquare,
} from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts"

// Helper function for factorial calculation
function factorial(n: number): number {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}

export default function MathBlog() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    intro: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

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

  // Exponential distribution data
  const exponentialDistributionData = Array.from({ length: 50 }, (_, i) => {
    const x = i * 0.2
    const lambda = 1
    const y = lambda * Math.exp(-lambda * x)
    return { x: Number.parseFloat(x.toFixed(1)), y: Number.parseFloat(y.toFixed(4)) }
  })

  // Gradient descent visualization data
  const gradientDescentData = [
    { iteration: 0, error: 80, x: 1, y: 1 },
    { iteration: 1, error: 60, x: 1.5, y: 1.5 },
    { iteration: 2, error: 45, x: 2, y: 2 },
    { iteration: 3, error: 35, x: 2.5, y: 2.5 },
    { iteration: 4, error: 25, x: 3, y: 3 },
    { iteration: 5, error: 18, x: 3.5, y: 3.5 },
    { iteration: 6, error: 12, x: 4, y: 4 },
    { iteration: 7, error: 8, x: 4.5, y: 4.5 },
    { iteration: 8, error: 5, x: 5, y: 5 },
    { iteration: 9, error: 3, x: 5.5, y: 5.5 },
    { iteration: 10, error: 2, x: 6, y: 6 },
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

  // Vector operations visualization
  const vectorAdditionData = [
    { name: "Vector A", x: 3, y: 2 },
    { name: "Vector B", x: 2, y: 3 },
    { name: "Vector A+B", x: 5, y: 5 },
  ]

  // Matrix multiplication visualization
  const matrixAData = [
    [1, 2],
    [3, 4],
  ]

  const matrixBData = [
    [5, 6],
    [7, 8],
  ]

  const matrixCData = [
    [19, 22],
    [43, 50],
  ]

  // Integration visualization data
  const integrationData = Array.from({ length: 41 }, (_, i) => {
    const x = i * 0.1
    const y = x * x
    return { x, y }
  })

  // Bayesian update visualization
  const bayesianUpdateData = [
    { name: "Prior", probability: 0.01 },
    { name: "Posterior", probability: 0.083 },
  ]

  // Monte Carlo simulation data
  const monteCarloData = Array.from({ length: 10 }, (_, i) => {
    const iterations = (i + 1) * 100
    const estimate =
      4 *
      (1 - 1 / 3 + 1 / 5 - 1 / 7 + 1 / 9 - 1 / 11 + 1 / 13 - 1 / 15 + 1 / 17 - 1 / 19) *
      (1 - Math.random() * 0.1 + Math.random() * 0.1)
    const error = Math.abs(Math.PI - estimate)
    return { iterations, estimate, error }
  })

  // Entropy data
  const entropyData = Array.from({ length: 99 }, (_, i) => {
    const p = (i + 1) / 100
    const entropy = -p * Math.log2(p) - (1 - p) * Math.log2(1 - p)
    return { probability: p, entropy }
  })

  // COLORS
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

  // Table of Contents
  const tableOfContents = [
    {
      id: "intro",
      title: "Introduction: Why Mathematics is the Foundation of AI",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      id: "part1",
      title: "PART 1: Core Mathematics Fundamentals",
      icon: <Calculator className="h-5 w-5" />,
      subsections: [
        { id: "numbers", title: "Numbers & Algebra Refresher" },
        { id: "linear-algebra", title: "Linear Algebra & Matrix Operations" },
        { id: "calculus", title: "Calculus: Understanding Change & Optimization" },
      ],
    },
    {
      id: "part2",
      title: "PART 2: Probability & Statistics for AI",
      icon: <PieChart className="h-5 w-5" />,
      subsections: [
        { id: "probability", title: "Probability Theory" },
        { id: "distributions", title: "Probability Distributions" },
        { id: "inference", title: "Statistical Inference & Hypothesis Testing" },
      ],
    },
    {
      id: "part3",
      title: "PART 3: Advanced Mathematics for AI & Machine Learning",
      icon: <TrendingUp className="h-5 w-5" />,
      subsections: [
        { id: "optimization", title: "Optimization Techniques in AI" },
        { id: "bayesian", title: "Bayesian Statistics & Probabilistic Modeling" },
        { id: "monte-carlo", title: "Monte Carlo Methods & Simulation in AI" },
      ],
    },
    {
      id: "part4",
      title: "PART 4: Deep Learning Mathematics",
      icon: <Zap className="h-5 w-5" />,
      subsections: [
        { id: "vector-calculus", title: "Vector Calculus & Matrix Calculus for AI" },
        { id: "information-theory", title: "Information Theory & AI" },
      ],
    },
    {
      id: "part5",
      title: "PART 5: Real-World AI Applications of Mathematics",
      icon: <Database className="h-5 w-5" />,
      subsections: [
        { id: "self-driving", title: "How AI Uses Probability in Self-Driving Cars" },
        { id: "image-recognition", title: "How AI Uses Calculus for Image Recognition" },
        { id: "fraud-detection", title: "How AI Uses Statistics for Fraud Detection" },
        { id: "nlp", title: "How AI Uses Linear Algebra for NLP" },
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion & Final Thoughts",
      icon: <Lightbulb className="h-5 w-5" />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Mathematics for Data Science, Machine Learning, and AI
        </h1>
        <p className="text-xl text-muted-foreground">From Zero to Advanced: A Comprehensive Guide</p>
      </header>

      {/* Table of Contents */}
      <div className="mb-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
        <div className="space-y-3">
          {tableOfContents.map((section) => (
            <div key={section.id} className="space-y-2">
              <div
                className="flex items-center cursor-pointer hover:text-primary transition-colors"
                onClick={() => {
                  const element = document.getElementById(section.id)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {section.icon}
                <span className="ml-2 font-medium">{section.title}</span>
              </div>
              {section.subsections && (
                <div className="ml-7 space-y-1">
                  {section.subsections.map((subsection) => (
                    <div
                      key={subsection.id}
                      className="text-sm hover:text-primary cursor-pointer transition-colors"
                      onClick={() => {
                        const element = document.getElementById(subsection.id)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      • {subsection.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Introduction Section */}
      <section id="intro" className="mb-16">
        <div className="flex items-center mb-6">
          <Brain className="h-7 w-7 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">Introduction: Why Mathematics is the Foundation of AI</h2>
        </div>

        <p className="mb-6 text-lg">
          Mathematics provides the language and tools that power artificial intelligence and machine learning. Don't
          worry if you've never been a "math person" – this guide will take you from the very basics to advanced
          concepts, explaining everything in simple terms with real-world examples.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Why Mathematics Matters in AI</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Decision Making:</span> Mathematics provides the framework for
                    machines to make decisions based on data
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Pattern Recognition:</span> Mathematical models help AI systems
                    identify patterns in complex data
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Prediction:</span> Statistical methods allow AI to make predictions
                    about future events
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Optimization:</span> Mathematical techniques help AI systems find the
                    best solutions to problems
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Math Fears (And Why They're Misconceptions)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 text-yellow-500" />
                  <div>
                    <span className="font-medium">"Math is too abstract"</span>
                    <p className="text-sm text-muted-foreground">We'll connect every concept to real-world examples</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 text-yellow-500" />
                  <div>
                    <span className="font-medium">"I'm not naturally good at math"</span>
                    <p className="text-sm text-muted-foreground">
                      Mathematical thinking is a skill that can be developed with practice
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 text-yellow-500" />
                  <div>
                    <span className="font-medium">"I'll never use this in real life"</span>
                    <p className="text-sm text-muted-foreground">
                      We'll show exactly how each concept is used in AI applications
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertTitle>Learning Approach</AlertTitle>
          <AlertDescription>
            We'll start with intuitive explanations and real-world examples before introducing mathematical notation.
            This makes complex concepts more accessible, even if you have no prior math experience.
          </AlertDescription>
        </Alert>

        <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
            How Machines "Think" Using Math
          </h3>
          <p className="mb-4">
            Imagine teaching a child to recognize cats. You'd show them many pictures of cats, pointing out features
            like whiskers, pointy ears, and tails. Over time, the child learns to recognize cats by these features.
          </p>
          <p className="mb-4">
            AI works similarly, but uses mathematics to learn. Instead of vague concepts like "pointy ears," AI uses
            numbers and equations:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Numbers represent features:</strong> Ear pointiness might be a number from 0-10
            </li>
            <li>
              <strong>Equations combine features:</strong> Maybe (ear pointiness × 0.7) + (whisker presence × 0.8) +
              (tail length × 0.3) = "catness score"
            </li>
            <li>
              <strong>Statistics determine importance:</strong> The AI learns which features matter most for identifying
              cats
            </li>
            <li>
              <strong>Calculus optimizes learning:</strong> The AI adjusts its equations to improve accuracy over time
            </li>
          </ul>
          <p>
            Throughout this guide, we'll explore how these mathematical concepts enable machines to learn, recognize
            patterns, and make decisions—all without explicitly being programmed for each specific task.
          </p>
        </div>
      </section>

      {/* PART 1: Core Mathematics Fundamentals */}
      <section id="part1" className="mb-16">
        <div className="flex items-center mb-6">
          <Calculator className="h-7 w-7 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">PART 1: Core Mathematics Fundamentals</h2>
        </div>

        {/* Numbers & Algebra Refresher */}
        <div id="numbers" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">1. Numbers & Algebra Refresher</h3>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Understanding Different Types of Numbers</CardTitle>
              <CardDescription>
                Before we can build AI systems, we need to understand the building blocks: numbers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Natural Numbers (ℕ)</h4>
                  <p className="text-sm text-muted-foreground">The counting numbers: 1, 2, 3, 4, ...</p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md mt-1 text-sm">
                    <span className="font-medium">Real-world example:</span> Counting the number of images in a dataset
                  </div>
                </div>

                <div>
                  <h4 className="font-medium">Whole Numbers (W)</h4>
                  <p className="text-sm text-muted-foreground">Natural numbers plus zero: 0, 1, 2, 3, ...</p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md mt-1 text-sm">
                    <span className="font-medium">Real-world example:</span> Counting the number of times an event
                    doesn't occur
                  </div>
                </div>

                <div>
                  <h4 className="font-medium">Integers (ℤ)</h4>
                  <p className="text-sm text-muted-foreground">
                    Whole numbers and their negatives: ..., -3, -2, -1, 0, 1, 2, 3, ...
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md mt-1 text-sm">
                    <span className="font-medium">Real-world example:</span> Temperature changes, profit/loss in
                    business analytics
                  </div>
                </div>

                <div>
                  <h4 className="font-medium">Rational Numbers (ℚ)</h4>
                  <p className="text-sm text-muted-foreground">
                    Numbers that can be expressed as a fraction of two integers
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md mt-1 text-sm">
                    <span className="font-medium">Real-world example:</span> Success rates, proportions, percentages in
                    data
                  </div>
                </div>

                <div>
                  <h4 className="font-medium">Real Numbers (ℝ)</h4>
                  <p className="text-sm text-muted-foreground">
                    All numbers on the number line, including irrational numbers like π and √2
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md mt-1 text-sm">
                    <span className="font-medium">Real-world example:</span> Measurements, distances, weights in
                    datasets
                  </div>
                </div>

                <div>
                  <h4 className="font-medium">Complex Numbers (ℂ)</h4>
                  <p className="text-sm text-muted-foreground">Numbers with a real and imaginary part (a + bi)</p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md mt-1 text-sm">
                    <span className="font-medium">Real-world example:</span> Signal processing, quantum computing
                    algorithms
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Algebraic Expressions & Simplifications</CardTitle>
              <CardDescription>Working with unknown values and relationships between variables</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Variables & Expressions</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Variables are letters that represent unknown values. Algebraic expressions are combinations of
                    variables and operations.
                  </p>
                  <div className="bg-muted p-3 rounded-md text-sm mb-3">
                    <p>
                      <strong>Example:</strong> 3x² + 2y - z represents a relationship between three variables
                    </p>
                    <p className="mt-2">
                      <strong>In AI:</strong> In a housing price prediction model, variables might include:
                    </p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>x = square footage</li>
                      <li>y = number of bedrooms</li>
                      <li>z = location score</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Simplification</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Combining like terms to make expressions easier to work with.
                  </p>
                  <div className="bg-muted p-3 rounded-md text-sm mb-3">
                    <p>
                      <strong>Example:</strong>
                    </p>
                    <p>3x + 2x = 5x (combining like terms)</p>
                    <p>4x² + 3x - 2x² + x = 2x² + 4x</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                    <span className="font-medium">Real-world application:</span> Simplifying complex prediction formulas
                    in machine learning to make them more efficient
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-medium mb-2">Solving Equations</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Finding the value of variables that make an equation true.
                </p>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>
                    <strong>Step-by-Step Example:</strong> Solve 2x + 5 = 13
                  </p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Subtract 5 from both sides: 2x + 5 - 5 = 13 - 5</li>
                    <li>Simplify: 2x = 8</li>
                    <li>Divide both sides by 2: 2x/2 = 8/2</li>
                    <li>Simplify: x = 4</li>
                  </ol>
                  <p className="mt-2">
                    <strong>In AI:</strong> Solving equations is fundamental to finding optimal parameters in machine
                    learning models
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Exponents & Logarithms</CardTitle>
              <CardDescription>
                Essential mathematical tools for understanding growth, scale, and patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Exponents</h4>
                  <p className="text-sm text-muted-foreground mb-2">Repeated multiplication of the same number</p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">2³ = 2 × 2 × 2 = 8</div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                    <span className="font-medium">Real-world applications:</span>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Exponential growth in data</li>
                      <li>Compound interest</li>
                      <li>Population growth models</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Logarithms</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The inverse of exponents, answering "what power do I need to raise this base to get this result?"
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">log₂(8) = 3 (because 2³ = 8)</div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                    <span className="font-medium">Real-world applications:</span>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Information theory (measuring bits)</li>
                      <li>Sound intensity (decibel scale)</li>
                      <li>AI learning curves</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-medium mb-2">Key Logarithm Properties</h4>
                <div className="bg-muted p-3 rounded-md font-mono text-sm grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div>log(xy) = log(x) + log(y)</div>
                  <div>log(x/y) = log(x) - log(y)</div>
                  <div>log(xⁿ) = n·log(x)</div>
                </div>
                <div className="mt-3 bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                  <p>
                    <strong>AI Application:</strong> In many machine learning algorithms, we use the log-likelihood
                    function to make calculations more manageable.
                  </p>
                  <p className="mt-2">
                    For example, when working with probabilities that are very small numbers (like 0.0000001),
                    multiplying them can cause numerical underflow. Taking the logarithm converts multiplication to
                    addition:
                  </p>
                  <p className="font-mono mt-1">log(p₁ × p₂ × p₃) = log(p₁) + log(p₂) + log(p₃)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sigma (Σ) & Pi (Π) Notation</CardTitle>
              <CardDescription>
                Compact ways to write sums and products, essential for many AI algorithms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Sigma Notation (Σ)</h4>
                  <p className="text-sm text-muted-foreground mb-2">A compact way to write sums</p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">Σᵢ₌₁ⁿ xᵢ = x₁ + x₂ + ... + xₙ</div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                    <span className="font-medium">Real-world application:</span> Calculating the total error in a
                    machine learning model
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Pi Notation (Π)</h4>
                  <p className="text-sm text-muted-foreground mb-2">A compact way to write products</p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">Πᵢ₌₁ⁿ xᵢ = x₁ × x₂ × ... × xₙ</div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                    <span className="font-medium">Real-world application:</span> Calculating probabilities of
                    independent events
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-medium mb-2">Step-by-Step Examples</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>
                    <strong>Example 1:</strong> Calculate Σᵢ₌₁⁵ i
                  </p>
                  <p className="mt-1">This means: 1 + 2 + 3 + 4 + 5 = 15</p>

                  <p className="mt-3">
                    <strong>Example 2:</strong> Calculate Πᵢ₌₁⁴ i
                  </p>
                  <p className="mt-1">This means: 1 × 2 × 3 × 4 = 24</p>
                </div>

                <div className="mt-3 bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                  <p>
                    <strong>AI Application:</strong> In a neural network, the weighted sum of inputs is written as:
                  </p>
                  <p className="font-mono mt-1">z = Σᵢ₌₁ⁿ wᵢxᵢ + b</p>
                  <p className="mt-2">Where:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>wᵢ are the weights</li>
                    <li>xᵢ are the inputs</li>
                    <li>b is the bias term</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Linear Algebra & Matrix Operations */}
        <div id="linear-algebra" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            2. Linear Algebra & Matrix Operations
          </h3>

          <p className="mb-4">
            Linear algebra is the language of data in AI and machine learning. It allows us to work with large datasets
            efficiently.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Vectors: The Building Blocks</CardTitle>
              <CardDescription>Understanding vectors and their operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is a Vector?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A vector is a quantity with both magnitude (size) and direction.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Imagine you're walking 3 miles north and 4
                  miles east. This can be represented as a vector [3, 4], where the magnitude (distance) is 5 miles
                  (using the Pythagorean theorem: √(3² + 4²) = 5).
                </div>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <span className="font-medium">In AI:</span> Vectors represent data points, features, or parameters.
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      A house might be represented as a vector: [1500, 3, 2, 1975] for [square feet, bedrooms,
                      bathrooms, year built]
                    </li>
                    <li>
                      A word in natural language processing might be represented as a vector of numbers (word embedding)
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Vector Operations</h4>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Addition:</span> Adding corresponding elements
                    <div className="font-mono mt-1">[a, b] + [c, d] = [a+c, b+d]</div>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Scalar Multiplication:</span> Multiplying each element by a number
                    <div className="font-mono mt-1">k[a, b] = [ka, kb]</div>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Dot Product:</span> Multiplying corresponding elements and summing
                    them
                    <div className="font-mono mt-1">[a, b] · [c, d] = ac + bd</div>
                  </div>
                </div>

                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" name="x" domain={[0, 6]} />
                      <YAxis type="number" dataKey="y" name="y" domain={[0, 6]} />
                      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                      <Legend />
                      <Scatter name="Vector A" data={[vectorAdditionData[0]]} fill="#8884d8" />
                      <Scatter name="Vector B" data={[vectorAdditionData[1]]} fill="#82ca9d" />
                      <Scatter name="Vector A+B" data={[vectorAdditionData[2]]} fill="#ff7300" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                  <span className="font-medium">Real-world applications:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>In recommendation systems, user preferences are represented as vectors</li>
                    <li>In image recognition, features are extracted as vectors</li>
                    <li>In natural language processing, words are embedded as vectors</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Matrices: Collections of Vectors</CardTitle>
              <CardDescription>Understanding matrices and their operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is a Matrix?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A rectangular array of numbers arranged in rows and columns.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> A spreadsheet or table of data.
                </div>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <span className="font-medium">In AI:</span> Matrices represent collections of data points,
                  transformations, or relationships.
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      A dataset with multiple houses might be a matrix where each row is a house and each column is a
                      feature
                    </li>
                    <li>The weights in a neural network layer are stored as a matrix</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Matrix Multiplication: Step-by-Step</h4>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Matrix A:</span>
                    <div className="font-mono mt-1 grid grid-cols-2 gap-2 justify-center">
                      <div className="text-center">1</div>
                      <div className="text-center">2</div>
                      <div className="text-center">3</div>
                      <div className="text-center">4</div>
                    </div>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Matrix B:</span>
                    <div className="font-mono mt-1 grid grid-cols-2 gap-2 justify-center">
                      <div className="text-center">5</div>
                      <div className="text-center">6</div>
                      <div className="text-center">7</div>
                      <div className="text-center">8</div>
                    </div>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Result C = A×B:</span>
                    <div className="font-mono mt-1 grid grid-cols-2 gap-2 justify-center">
                      <div className="text-center">19</div>
                      <div className="text-center">22</div>
                      <div className="text-center">43</div>
                      <div className="text-center">50</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Step-by-Step Calculation:</span>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>For c₁₁: (1×5) + (2×7) = 5 + 14 = 19</li>
                    <li>For c₁₂: (1×6) + (2×8) = 6 + 16 = 22</li>
                    <li>For c₂₁: (3×5) + (4×7) = 15 + 28 = 43</li>
                    <li>For c₂₂: (3×6) + (4×8) = 18 + 32 = 50</li>
                  </ol>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                  <span className="font-medium">Real-world application:</span> In a neural network, if A represents
                  input data and B represents weights, then C represents the weighted inputs before activation.
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eigenvalues & Eigenvectors</CardTitle>
              <CardDescription>
                Special vectors that maintain their direction when transformed by a matrix
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What are Eigenvalues & Eigenvectors?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Special vectors that, when transformed by a matrix, only change in scale (not direction).
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> When you push on a door, it rotates around its
                  hinges. The hinge line is an eigenvector of the pushing transformation.
                </div>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Mathematical definition:</p>
                  <p className="mt-1">
                    For a square matrix A, if Av = λv for some scalar λ and non-zero vector v, then:
                  </p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>λ is an eigenvalue</li>
                    <li>v is the corresponding eigenvector</li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Calculation</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>
                    <strong>Example:</strong> Find the eigenvalues and eigenvectors of A = [[3, 1], [1, 3]]
                  </p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Set up the characteristic equation: det(A - λI) = 0</li>
                    <li>Expand: det([[3-λ, 1], [1, 3-λ]]) = 0</li>
                    <li>Calculate: (3-λ)(3-λ) - 1×1 = 0</li>
                    <li>Simplify: (3-λ)² - 1 = 0</li>
                    <li>Expand: 9 - 6λ + λ² - 1 = 0</li>
                    <li>Rearrange: λ² - 6λ + 8 = 0</li>
                    <li>Factor: (λ-4)(λ-2) = 0</li>
                    <li>Solve: λ = 4 or λ = 2</li>
                  </ol>
                  <p className="mt-2">For λ = 4, solve (A - 4I)v = 0 to find v = [1, 1]</p>
                  <p>For λ = 2, solve (A - 2I)v = 0 to find v = [1, -1]</p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Real-world applications:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Principal Component Analysis (PCA):</strong> Uses eigenvectors to reduce dimensionality
                    while preserving variance
                  </li>
                  <li>
                    <strong>Facial Recognition:</strong> Eigenfaces (eigenvectors of face image matrices) capture the
                    most important features of faces
                  </li>
                  <li>
                    <strong>Google's PageRank:</strong> Uses eigenvectors to rank web pages by importance
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Calculus: Understanding Change & Optimization */}
        <div id="calculus" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            3. Calculus: Understanding Change & Optimization
          </h3>

          <p className="mb-4">
            Calculus is the mathematics of change and is fundamental to how machine learning algorithms improve over
            time.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Limits: The Foundation of Calculus</CardTitle>
              <CardDescription>Understanding how functions behave as inputs approach specific values</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is a Limit?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A limit describes the value a function approaches as the input approaches a certain value.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Imagine driving toward a city. The "limit" is
                  your destination, even though you're continuously getting closer without actually being there yet.
                </div>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Notation:</p>
                  <p className="mt-1">lim(x→a) f(x) = L</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    This means "as x approaches a, f(x) approaches L"
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Example</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>
                    <strong>Example:</strong> Find lim(x→2) (x² - 4)/(x - 2)
                  </p>
                  <p className="mt-1">Direct substitution gives 0/0, which is indeterminate.</p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Factor the numerator: (x² - 4) = (x - 2)(x + 2)</li>
                    <li>Simplify: (x - 2)(x + 2)/(x - 2) = x + 2 (for x ≠ 2)</li>
                    <li>Evaluate the limit: lim(x→2) (x + 2) = 2 + 2 = 4</li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> Limits help us understand how functions behave as we make
                very small changes to inputs, which is essential for optimization algorithms.
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Derivatives: Measuring Rate of Change</CardTitle>
              <CardDescription>Understanding how quickly functions change</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is a Derivative?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The derivative measures how quickly a function changes at a specific point.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> The speedometer in your car shows the
                  derivative of your position with respect to time.
                </div>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Notation:</p>
                  <p className="mt-1">f'(x) or df/dx represents the derivative of f with respect to x</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Calculation</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p className="font-medium">The definition of a derivative:</p>
                  <div className="font-mono mt-1 mb-3">f'(x) = lim(h→0) [f(x+h) - f(x)]/h</div>

                  <p className="font-medium">Example: Find the derivative of f(x) = x²</p>
                  <ol className="list-decimal pl-5 mt-1 space-y-1">
                    <li>f'(x) = lim(h→0) [(x+h)² - x²]/h</li>
                    <li>= lim(h→0) [x² + 2xh + h² - x²]/h</li>
                    <li>= lim(h→0) [2xh + h²]/h</li>
                    <li>= lim(h→0) [2x + h]</li>
                    <li>= 2x</li>
                  </ol>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">In AI & Machine Learning</h4>
                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                    <ul className="list-disc pl-5">
                      <li>Derivatives tell us how to adjust model parameters to reduce error (gradient descent)</li>
                      <li>They help find the minimum of cost functions</li>
                      <li>They're essential for backpropagation in neural networks</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Real-world Application</h4>
                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                    <p>
                      In a house price prediction model, the derivative tells us how much the predicted price changes
                      when we increase a feature (like square footage) by a small amount.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Gradient Descent: How AI Learns</CardTitle>
              <CardDescription>The optimization algorithm that powers many machine learning models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Gradient Descent?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  An iterative optimization algorithm for finding the minimum of a function.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Imagine you're in a mountain valley and want
                  to reach the lowest point. If you always take a step in the direction of steepest descent, you'll
                  eventually reach the bottom.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">How It Works</h4>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <ol className="list-decimal pl-5">
                    <li>Start at a random point (initialize parameters)</li>
                    <li>Calculate the gradient (slope) at that point</li>
                    <li>Take a step in the opposite direction of the gradient</li>
                    <li>Repeat until you reach a minimum</li>
                  </ol>
                </div>

                <div className="font-mono text-sm mb-4 bg-muted p-3 rounded-md">
                  <p className="font-medium">The update rule:</p>
                  <div className="mt-1">θ = θ - α * ∇J(θ)</div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Where θ is the parameter, α is the learning rate, and ∇J(θ) is the gradient of the cost function
                  </p>
                </div>
              </div>

              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={gradientDescentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="iteration" label={{ value: "Iteration", position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Error", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="error" name="Error" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Real-world application:</span> In neural networks, gradient descent is
                used to update weights and biases to minimize prediction error.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integration: Finding Areas & Totals</CardTitle>
              <CardDescription>Understanding how to calculate total accumulation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Integration?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Integration is the process of finding the total accumulation of a quantity.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> If you know your speed at every moment during
                  a trip, integration helps you find the total distance traveled.
                </div>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Notation:</p>
                  <p className="mt-1">∫f(x)dx represents the indefinite integral of f with respect to x</p>
                  <p className="mt-1">∫ₐᵇf(x)dx represents the definite integral of f from x = a to x = b</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Visualizing Integration</h4>
                <div className="h-64 mb-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={integrationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="x" label={{ value: "x", position: "insideBottom", offset: -5 }} />
                      <YAxis label={{ value: "f(x) = x²", angle: -90, position: "insideLeft" }} />
                      <Tooltip />
                      <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-center text-muted-foreground">
                  The shaded area represents the definite integral of f(x) = x² from x = 0 to x = 4
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Example</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>
                    <strong>Example:</strong> Find ∫x²dx
                  </p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Use the power rule: ∫xⁿdx = xⁿ⁺¹/(n+1) + C (for n ≠ -1)</li>
                    <li>Apply to x²: ∫x²dx = x³/3 + C</li>
                  </ol>

                  <p className="mt-3">
                    <strong>Example:</strong> Calculate ∫₀⁴x²dx
                  </p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Use the antiderivative: ∫x²dx = x³/3 + C</li>
                    <li>Evaluate at the bounds: [x³/3]₀⁴</li>
                    <li>Calculate: (4³/3) - (0³/3) = 64/3 - 0 = 64/3 ≈ 21.33</li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Real-world applications:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Probability Density Functions:</strong> Integration calculates the probability of a random
                    variable falling within a certain range
                  </li>
                  <li>
                    <strong>Expected Values:</strong> Integration helps calculate the average outcome of a random
                    process
                  </li>
                  <li>
                    <strong>Signal Processing:</strong> Integration converts signals between time and frequency domains
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PART 2: Probability & Statistics for AI */}
      <section id="part2" className="mb-16">
        <div className="flex items-center mb-6">
          <PieChart className="h-7 w-7 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">PART 2: Probability & Statistics for AI</h2>
        </div>

        {/* Probability Theory */}
        <div id="probability" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">4. Probability Theory</h3>

          <p className="mb-4">
            Probability is the mathematics of uncertainty, which is essential in AI because real-world data and
            decisions involve uncertainty.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Basic Probability Concepts</CardTitle>
              <CardDescription>Understanding the fundamentals of probability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Probability?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The likelihood of an event occurring, expressed as a number between 0 (impossible) and 1 (certain).
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> The probability of a fair coin landing heads
                  is 0.5 or 50%.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Terms</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Sample Space (S):</span>
                    <p className="mt-1">The set of all possible outcomes</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Example: When rolling a die, S = {(1, 2, 3, 4, 5, 6)}
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Event (E):</span>
                    <p className="mt-1">A subset of the sample space</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Example: Rolling an even number, E = {(2, 4, 6)}
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Probability of an Event P(E):</span>
                    <p className="mt-1">Number of favorable outcomes / Total number of possible outcomes</p>
                    <p className="mt-1 text-xs text-muted-foreground">Example: P(rolling an even number) = 3/6 = 0.5</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Probability Laws</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <ol className="list-decimal pl-5">
                    <li>0 ≤ P(E) ≤ 1 for any event E</li>
                    <li>P(S) = 1 (something must happen)</li>
                    <li>P(E₁ ∪ E₂) = P(E₁) + P(E₂) - P(E₁ ∩ E₂) (addition rule)</li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Real-world application:</span> Spam filters assign probabilities to emails
                being spam or legitimate.
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Conditional Probability & Independence</CardTitle>
              <CardDescription>Understanding how events influence each other</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Conditional Probability?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The probability of an event occurring given that another event has occurred.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Notation:</p>
                  <p className="mt-1">P(A|B) = "probability of A given B"</p>
                  <p className="mt-2 font-medium">Formula:</p>
                  <p className="mt-1">P(A|B) = P(A ∩ B) / P(B)</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> The probability of a patient having a disease
                  given that they tested positive.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Independence</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Events A and B are independent if the occurrence of one does not affect the probability of the other.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Mathematical definition:</p>
                  <p className="mt-1">
                    A and B are independent if P(A|B) = P(A) or equivalently P(A ∩ B) = P(A) × P(B)
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Example:</span> Flipping a fair coin twice. The outcome of the first
                  flip doesn't affect the probability of the second flip.
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> Conditional probability is used in classification, decision
                trees, and Bayesian networks.
                <p className="mt-2">
                  <strong>Real-world application:</strong> In medical diagnosis, AI systems calculate the probability of
                  diseases given symptoms.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bayes' Theorem: Updating Beliefs with Evidence</CardTitle>
              <CardDescription>A fundamental concept in probability theory and machine learning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Bayes' Theorem?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A formula that describes how to update probabilities based on new evidence.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Bayes' Theorem:</p>
                  <p className="mt-1">P(H|E) = [P(E|H) × P(H)] / P(E)</p>
                  <p className="mt-2 text-xs text-muted-foreground">Where:</p>
                  <ul className="list-disc pl-5 mt-1 text-xs text-muted-foreground">
                    <li>P(H|E) is the posterior probability of hypothesis H given evidence E</li>
                    <li>P(E|H) is the likelihood of observing evidence E given hypothesis H</li>
                    <li>P(H) is the prior probability of hypothesis H</li>
                    <li>P(E) is the marginal likelihood or evidence</li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Derivation</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <ol className="list-decimal pl-5">
                    <li>Start with the definition of conditional probability: P(A|B) = P(A ∩ B) / P(B)</li>
                    <li>Similarly, P(B|A) = P(A ∩ B) / P(A)</li>
                    <li>Rearrange to get: P(A ∩ B) = P(B|A) × P(A)</li>
                    <li>Substitute into the first equation: P(A|B) = [P(B|A) × P(A)] / P(B)</li>
                  </ol>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Intuitive Example</h4>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                  <p>
                    Initially, you might think there's a 1% chance someone has a rare disease (prior). If they test
                    positive on a 90% accurate test, Bayes' theorem helps you update this probability (posterior).
                  </p>
                  <div className="mt-2">
                    <p>
                      <strong>Given:</strong>
                    </p>
                    <ul className="list-disc pl-5">
                      <li>P(Disease) = 0.01 (prior probability)</li>
                      <li>P(Positive|Disease) = 0.9 (test sensitivity)</li>
                      <li>P(Positive|No Disease) = 0.1 (false positive rate)</li>
                    </ul>
                    <p className="mt-2">
                      <strong>Using Bayes' Theorem:</strong>
                    </p>
                    <p>P(Disease|Positive) = [P(Positive|Disease) × P(Disease)] / P(Positive)</p>
                    <p>P(Disease|Positive) = [0.9 × 0.01] / [0.9 × 0.01 + 0.1 × 0.99]</p>
                    <p>P(Disease|Positive) ≈ 0.083 or about 8.3%</p>
                  </div>
                </div>

                <div className="h-64 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={bayesianUpdateData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 0.1]} />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
                      <Bar dataKey="probability" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Real-world applications:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    Spam filters use Bayes' theorem to update the probability that an email is spam based on the words
                    it contains
                  </li>
                  <li>Medical diagnosis systems update disease probabilities based on test results</li>
                  <li>Recommendation systems update user preference probabilities based on interactions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Probability Distributions */}
        <div id="distributions" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">5. Probability Distributions</h3>

          <p className="mb-4">
            Probability distributions describe how probabilities are distributed over possible values of a random
            variable.
          </p>

          <Tabs defaultValue="discrete" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="discrete">Discrete Distributions</TabsTrigger>
              <TabsTrigger value="continuous">Continuous Distributions</TabsTrigger>
            </TabsList>

            <TabsContent value="discrete" className="p-4">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Discrete Probability Distributions</h4>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Bernoulli Distribution</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Models a single binary outcome (success/failure)
                    </p>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-2">
                      <p>P(X = 1) = p</p>
                      <p>P(X = 0) = 1-p</p>
                      <p className="mt-2">Mean: p</p>
                      <p>Variance: p(1-p)</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                      <span className="font-medium">Real-world example:</span> Modeling whether a customer will click on
                      an ad (1) or not (0)
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Binomial Distribution</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Models the number of successes in n independent Bernoulli trials
                    </p>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-2">
                      <p>P(X = k) = (n choose k) × p^k × (1-p)^(n-k)</p>
                      <p className="mt-2">Mean: np</p>
                      <p>Variance: np(1-p)</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                      <span className="font-medium">Real-world example:</span> Predicting how many emails out of 100
                      will be spam
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Poisson Distribution</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Models the number of events occurring in a fixed interval
                    </p>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-2">
                      <p>P(X = k) = (λ^k × e^(-λ)) / k!</p>
                      <p className="mt-2">Mean: λ</p>
                      <p>Variance: λ</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                      <span className="font-medium">Real-world example:</span> Modeling the number of customer service
                      calls per hour
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Visualizations</h4>

                  <div className="mb-6">
                    <h5 className="font-medium mb-2">Binomial Distribution (n=10, p=0.5)</h5>
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

                  <div>
                    <h5 className="font-medium mb-2">Poisson Distribution (λ=5)</h5>
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
                </div>
              </div>
            </TabsContent>

            <TabsContent value="continuous" className="p-4">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Continuous Probability Distributions</h4>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Normal Distribution</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      The bell-shaped curve that describes many natural phenomena
                    </p>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-2">
                      <p>f(x) = (1 / (σ√(2π))) × e^(-(x-μ)²/(2σ²))</p>
                      <p className="mt-2">Mean: μ</p>
                      <p>Variance: σ²</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                      <span className="font-medium">Real-world examples:</span> Height, weight, IQ scores, measurement
                      errors
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Exponential Distribution</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Models the time between events in a Poisson process
                    </p>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-2">
                      <p>f(x) = λe^(-λx) for x ≥ 0</p>
                      <p className="mt-2">Mean: 1/λ</p>
                      <p>Variance: 1/λ²</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                      <span className="font-medium">Real-world example:</span> Time until a machine fails, time between
                      customer arrivals
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Uniform Distribution</h5>
                    <p className="text-sm text-muted-foreground mb-2">Equal probability across a range of values</p>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm mb-2">
                      <p>f(x) = 1/(b-a) for a ≤ x ≤ b</p>
                      <p className="mt-2">Mean: (a+b)/2</p>
                      <p>Variance: (b-a)²/12</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                      <span className="font-medium">Real-world example:</span> Random number generation, initialization
                      of weights in neural networks
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Visualizations</h4>

                  <div className="mb-6">
                    <h5 className="font-medium mb-2">Normal Distribution (μ=0, σ=1)</h5>
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

                  <div>
                    <h5 className="font-medium mb-2">Exponential Distribution (λ=1)</h5>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={exponentialDistributionData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="x" label={{ value: "Time (x)", position: "insideBottom", offset: -5 }} />
                          <YAxis label={{ value: "Probability Density", angle: -90, position: "insideLeft" }} />
                          <Tooltip formatter={(value) => value.toFixed(4)} />
                          <Line type="monotone" dataKey="y" stroke="#82ca9d" dot={false} strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Applications in AI & Machine Learning</CardTitle>
              <CardDescription>How probability distributions are used in AI systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">Classification</h4>
                  <p className="text-sm text-muted-foreground">
                    Naive Bayes classifiers use probability distributions to classify data into categories.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md mt-2 text-sm">
                    <span className="font-medium">Example:</span> Email spam filters use the probability distribution of
                    words in spam vs. legitimate emails.
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">Generative Models</h4>
                  <p className="text-sm text-muted-foreground">
                    Models like GANs and VAEs use probability distributions to generate new data.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md mt-2 text-sm">
                    <span className="font-medium">Example:</span> A GAN might model the distribution of facial features
                    to generate realistic faces.
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">Reinforcement Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Probability distributions model uncertainty in action selection and environment dynamics.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md mt-2 text-sm">
                    <span className="font-medium">Example:</span> A self-driving car uses probability distributions to
                    model uncertainty in sensor readings.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistical Inference & Hypothesis Testing */}
        <div id="inference" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            6. Statistical Inference & Hypothesis Testing
          </h3>

          <p className="mb-4">
            Statistical inference allows us to draw conclusions about populations based on samples, which is crucial for
            AI systems that learn from limited data.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Sampling & Data Collection</CardTitle>
              <CardDescription>Understanding how to collect representative data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Sampling?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Sampling is the process of selecting a subset of individuals from a population to estimate
                  characteristics of the whole population.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Polling 1,000 voters to predict an election
                  outcome instead of asking all eligible voters.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Types of Sampling</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Random Sampling:</span>
                    <p className="mt-1">Each member of the population has an equal chance of being selected</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Example: Using a random number generator to select participants
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Stratified Sampling:</span>
                    <p className="mt-1">Dividing the population into subgroups and sampling from each</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Example: Ensuring equal representation of different age groups
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> The quality of training data directly affects model
                performance. Biased or unrepresentative samples lead to biased models.
                <p className="mt-2">
                  <strong>Real-world application:</strong> In sentiment analysis, collecting reviews from various
                  sources to avoid platform-specific biases.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Hypothesis Testing</CardTitle>
              <CardDescription>A framework for making decisions based on data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Hypothesis Testing?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A method for making decisions using data, where we test a hypothesis against evidence.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Testing whether a new drug is effective by
                  comparing patient outcomes with a control group.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Concepts</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Null Hypothesis (H₀):</span>
                    <p className="mt-1">The default assumption that there is no effect or difference</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Example: "The new algorithm performs the same as the old one"
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Alternative Hypothesis (H₁):</span>
                    <p className="mt-1">The claim we're testing for</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Example: "The new algorithm performs better than the old one"
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Common Statistical Tests</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>t-test:</strong> Compares means of two groups
                    </li>
                    <li>
                      <strong>Chi-square test:</strong> Tests relationships between categorical variables
                    </li>
                    <li>
                      <strong>ANOVA:</strong> Compares means of three or more groups
                    </li>
                    <li>
                      <strong>F-test:</strong> Compares variances of two populations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> Hypothesis testing helps evaluate whether model improvements
                are statistically significant or just due to random chance.
                <p className="mt-2">
                  <strong>Real-world application:</strong> A/B testing to determine if a new recommendation algorithm
                  significantly improves user engagement.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>P-values & Statistical Significance</CardTitle>
              <CardDescription>Understanding the strength of evidence against the null hypothesis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is a P-value?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The probability of observing results at least as extreme as the current results, assuming the null
                  hypothesis is true.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive explanation:</span> If you flip a coin 10 times and get 8
                  heads, the p-value tells you how likely it is to get 8 or more heads if the coin is fair (null
                  hypothesis).
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Statistical Significance</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A result is statistically significant if the p-value is less than a predetermined threshold (usually
                  0.05).
                </p>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <p>
                    <strong>Common thresholds:</strong>
                  </p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>p &lt; 0.05: Significant (5% chance of false positive)</li>
                    <li>p &lt; 0.01: Highly significant (1% chance of false positive)</li>
                    <li>p &lt; 0.001: Very highly significant (0.1% chance of false positive)</li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Common Misinterpretations</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <ul className="list-disc pl-5">
                    <li>A p-value is NOT the probability that the null hypothesis is true</li>
                    <li>Statistical significance does NOT imply practical significance</li>
                    <li>Failing to reject the null hypothesis does NOT prove it's true</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> P-values help determine if model performance differences are
                meaningful or just due to random variation in the data.
                <p className="mt-2">
                  <strong>Real-world application:</strong> When comparing two machine learning models, p-values help
                  determine if one model is genuinely better than the other.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PART 3: Advanced Mathematics for AI & Machine Learning */}
      <section id="part3" className="mb-16">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-7 w-7 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">PART 3: Advanced Mathematics for AI & Machine Learning</h2>
        </div>

        {/* Optimization Techniques in AI */}
        <div id="optimization" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">7. Optimization Techniques in AI</h3>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Bias-Variance Tradeoff</CardTitle>
              <CardDescription>Understanding the balance between model complexity and generalization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-2">Understanding the Tradeoff</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    The bias-variance tradeoff is a central concept in machine learning that balances a model's ability
                    to fit the training data (low bias) with its ability to generalize to new data (low variance).
                  </p>
                  <div className="bg-muted p-3 rounded-md text-sm mb-4">
                    <p className="font-medium">Key concepts:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        <strong>High bias (underfitting):</strong> Model is too simple and misses important patterns in
                        the data
                      </li>
                      <li>
                        <strong>High variance (overfitting):</strong> Model is too complex and learns noise in the
                        training data
                      </li>
                      <li>
                        <strong>Total error = Bias² + Variance + Irreducible Error</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                    <h5 className="font-medium flex items-center">
                      <Info className="h-4 w-4 mr-2 text-blue-500" />
                      Real-world Example
                    </h5>
                    <p>
                      A simple linear model might underfit housing price data by missing the relationship between
                      location and price (high bias). A complex model with many parameters might perfectly fit training
                      data but fail on new houses because it learned patterns specific to the training data (high
                      variance).
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
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Convex & Non-Convex Functions</CardTitle>
              <CardDescription>Understanding the shape of optimization landscapes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What are Convex Functions?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A function is convex if a line segment between any two points on the graph lies above or on the graph.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> A bowl-shaped function. If you connect any two
                  points on the bowl with a straight line, the line never dips below the bowl's surface.
                </div>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <p className="font-medium">Key properties:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Has a single global minimum (or a convex set of global minima)</li>
                    <li>Any local minimum is also a global minimum</li>
                    <li>Gradient descent is guaranteed to find the global minimum</li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Non-Convex Functions</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Functions that are not convex, often having multiple local minima.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> A landscape with multiple valleys. Depending
                  on where you start, you might end up in different valleys.
                </div>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <p className="font-medium">Challenges:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Multiple local minima can trap optimization algorithms</li>
                    <li>No guarantee that a local minimum is the global minimum</li>
                    <li>Optimization results depend on initialization</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> Most deep learning loss functions are non-convex, which is
                why training often requires techniques like random initialization, momentum, and learning rate
                schedules.
                <p className="mt-2">
                  <strong>Real-world application:</strong> Training neural networks involves optimizing non-convex
                  functions, which is why different training runs can lead to different results.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lagrange Multipliers: Constrained Optimization</CardTitle>
              <CardDescription>Finding extrema of functions subject to constraints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What are Lagrange Multipliers?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A method for finding the maximum or minimum of a function subject to equality constraints.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Finding the highest point on a mountain
                  (function) while staying on a specific path (constraint).
                </div>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">The Lagrangian:</p>
                  <p className="mt-1">L(x, λ) = f(x) - λ(g(x) - c)</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Where f(x) is the function to optimize, g(x) = c is the constraint, and λ is the Lagrange multiplier
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Example</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>
                    <strong>Example:</strong> Maximize f(x,y) = x + y subject to the constraint x² + y² = 1
                  </p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Form the Lagrangian: L(x, y, λ) = x + y - λ(x² + y² - 1)</li>
                    <li>
                      Take partial derivatives and set them to zero:
                      <ul className="list-disc pl-5 mt-1">
                        <li>∂L/∂x = 1 - 2λx = 0</li>
                        <li>∂L/∂y = 1 - 2λy = 0</li>
                        <li>∂L/∂λ = -(x² + y² - 1) = 0</li>
                      </ul>
                    </li>
                    <li>From the first two equations: x = y = 1/(2λ)</li>
                    <li>Substitute into the constraint: (1/(2λ))² + (1/(2λ))² = 1</li>
                    <li>Simplify: 2/(4λ²) = 1</li>
                    <li>Solve for λ: λ = ±1/√2</li>
                    <li>Substitute back: x = y = 1/√2 ≈ 0.7071 (for λ = 1/√2)</li>
                    <li>The maximum value is f(1/√2, 1/√2) = 1/√2 + 1/√2 = √2 ≈ 1.4142</li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> Lagrange multipliers are used in support vector machines
                (SVMs) to find the optimal hyperplane that maximizes the margin between classes while correctly
                classifying the training data.
                <p className="mt-2">
                  <strong>Real-world application:</strong> In portfolio optimization, Lagrange multipliers help maximize
                  expected returns subject to risk constraints.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bayesian Statistics & Probabilistic Modeling */}
        <div id="bayesian" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            8. Bayesian Statistics & Probabilistic Modeling
          </h3>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Bayesian Inference</CardTitle>
              <CardDescription>Updating beliefs based on evidence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Bayesian Inference?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A method of statistical inference where Bayes' theorem is used to update the probability of a
                  hypothesis as more evidence becomes available.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> A doctor starts with a general idea of how
                  likely a patient has a disease (prior). After seeing test results (evidence), the doctor updates this
                  belief (posterior).
                </div>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Bayes' Theorem:</p>
                  <p className="mt-1">P(H|E) = [P(E|H) × P(H)] / P(E)</p>
                  <p className="mt-2 text-xs text-muted-foreground">Where:</p>
                  <ul className="list-disc pl-5 mt-1 text-xs text-muted-foreground">
                    <li>P(H|E) is the posterior probability of hypothesis H given evidence E</li>
                    <li>P(E|H) is the likelihood of observing evidence E given hypothesis H</li>
                    <li>P(H) is the prior probability of hypothesis H</li>
                    <li>P(E) is the marginal likelihood or evidence</li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Concepts</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Prior:</span>
                    <p className="mt-1">Initial belief before seeing evidence</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Example: 1% of the population has a rare disease
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Likelihood:</span>
                    <p className="mt-1">Probability of the evidence given the hypothesis</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Example: 90% of people with the disease test positive
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Posterior:</span>
                    <p className="mt-1">Updated belief after seeing evidence</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Example: 8.3% chance of having the disease given a positive test
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> Bayesian inference provides a framework for updating model
                parameters based on observed data, which is particularly useful in online learning scenarios where data
                arrives sequentially.
                <p className="mt-2">
                  <strong>Real-world application:</strong> Spam filters continuously update their beliefs about which
                  words indicate spam based on user feedback.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Markov Chains & Hidden Markov Models</CardTitle>
              <CardDescription>Modeling sequences with probabilistic transitions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What are Markov Chains?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A stochastic model describing a sequence of possible events where the probability of each event
                  depends only on the state in the previous event.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Weather patterns where tomorrow's weather
                  depends only on today's weather, not on what happened earlier in the week.
                </div>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <p className="font-medium">Key property:</p>
                  <p className="mt-1">
                    The Markov property: P(Xₙ₊₁ = x | X₁ = x₁, X₂ = x₂, ..., Xₙ = xₙ) = P(Xₙ₊₁ = x | Xₙ = xₙ)
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    This means the future state depends only on the current state, not on the sequence of events that
                    preceded it.
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Hidden Markov Models (HMMs)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A statistical model where the system being modeled is assumed to be a Markov process with unobservable
                  (hidden) states.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> You can't directly observe whether a person is
                  happy or sad (hidden state), but you can observe their actions like smiling or frowning (observable
                  outputs).
                </div>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <p className="font-medium">Components:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Hidden states (e.g., weather conditions)</li>
                    <li>Observable outputs (e.g., umbrella usage)</li>
                    <li>State transition probabilities</li>
                    <li>Emission probabilities (probability of an output given a state)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Real-world applications:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Speech Recognition:</strong> HMMs model the sequence of sounds in speech
                  </li>
                  <li>
                    <strong>Natural Language Processing:</strong> Part-of-speech tagging uses HMMs to determine word
                    types in sentences
                  </li>
                  <li>
                    <strong>Bioinformatics:</strong> Gene finding in DNA sequences
                  </li>
                  <li>
                    <strong>Finance:</strong> Modeling market regimes (bull/bear markets)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monte Carlo Methods & Simulation in AI */}
        <div id="monte-carlo" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            9. Monte Carlo Methods & Simulation in AI
          </h3>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Monte Carlo Methods</CardTitle>
              <CardDescription>Using randomness to solve deterministic problems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What are Monte Carlo Methods?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Computational algorithms that use repeated random sampling to obtain numerical results.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Estimating π by randomly placing points in a
                  square and counting how many fall within a circle.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Example: Estimating π</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Consider a square with side length 2, centered at the origin</li>
                    <li>Inside this square is a circle with radius 1</li>
                    <li>The area of the square is 4, and the area of the circle is π</li>
                    <li>Randomly generate points (x, y) where -1 ≤ x, y ≤ 1</li>
                    <li>Count how many points fall inside the circle (where x² + y² ≤ 1)</li>
                    <li>The ratio of points inside the circle to total points ≈ π/4</li>
                    <li>Multiply this ratio by 4 to estimate π</li>
                  </ol>
                </div>
              </div>

              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monteCarloData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="iterations"
                      label={{ value: "Number of Iterations", position: "insideBottom", offset: -5 }}
                    />
                    <YAxis
                      label={{ value: "Estimated Value of π", angle: -90, position: "insideLeft" }}
                      domain={[2.8, 3.4]}
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="estimate" name="π Estimate" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="error" name="Error" stroke="#82ca9d" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> Monte Carlo methods are used when exact calculations are
                difficult or impossible.
                <p className="mt-2">
                  <strong>Real-world applications:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Reinforcement Learning:</strong> Monte Carlo tree search for game playing (e.g., AlphaGo)
                  </li>
                  <li>
                    <strong>Bayesian Inference:</strong> Markov Chain Monte Carlo (MCMC) for sampling from complex
                    distributions
                  </li>
                  <li>
                    <strong>Computer Graphics:</strong> Monte Carlo ray tracing for realistic lighting
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Markov Chain Monte Carlo (MCMC)</CardTitle>
              <CardDescription>Sampling from complex probability distributions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is MCMC?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A class of algorithms for sampling from a probability distribution by constructing a Markov chain that
                  has the desired distribution as its equilibrium distribution.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Imagine exploring a mountain range
                  blindfolded. You can only feel the ground around you and decide whether to step in a particular
                  direction. Over time, you'll spend more time in valleys (high probability regions) than on peaks (low
                  probability regions).
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Common MCMC Algorithms</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Metropolis-Hastings:</span>
                    <p className="mt-1">
                      Proposes a random move and accepts or rejects it based on the probability ratio
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <span className="font-medium">Gibbs Sampling:</span>
                    <p className="mt-1">Updates one variable at a time, conditioning on all others</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> MCMC is used for Bayesian inference in complex models where
                direct sampling or analytical solutions are not feasible.
                <p className="mt-2">
                  <strong>Real-world applications:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Topic Modeling:</strong> Latent Dirichlet Allocation (LDA) uses MCMC to discover topics in
                    text documents
                  </li>
                  <li>
                    <strong>Computer Vision:</strong> Object recognition with uncertain features
                  </li>
                  <li>
                    <strong>Recommender Systems:</strong> Bayesian personalized ranking
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PART 4: Deep Learning Mathematics */}
      <section id="part4" className="mb-16">
        <div className="flex items-center mb-6">
          <Zap className="h-7 w-7 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">PART 4: Deep Learning Mathematics</h2>
        </div>

        {/* Vector Calculus & Matrix Calculus for AI */}
        <div id="vector-calculus" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            10. Vector Calculus & Matrix Calculus for AI
          </h3>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Gradient Vectors & Hessian Matrices</CardTitle>
              <CardDescription>Understanding derivatives in multiple dimensions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is a Gradient Vector?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The gradient of a scalar function is a vector that points in the direction of steepest ascent.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Notation:</p>
                  <p className="mt-1">∇f = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> If f(x,y) represents the height of a mountain
                  at position (x,y), then ∇f points in the direction of steepest uphill climb.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">What is a Hessian Matrix?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The Hessian matrix is a square matrix of second-order partial derivatives of a scalar function.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">For a function f(x,y), the Hessian is:</p>
                  <p className="mt-1">H = [ [∂²f/∂x², ∂²f/∂x∂y], [∂²f/∂y∂x, ∂²f/∂y²] ]</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> The Hessian describes the local curvature of a
                  function. It tells you whether you're in a valley, on a peak, or at a saddle point.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Example</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>
                    <strong>Example:</strong> Find the gradient and Hessian of f(x,y) = x² + 2xy + 3y²
                  </p>
                  <p className="mt-2">
                    <strong>Gradient:</strong>
                  </p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>∂f/∂x = 2x + 2y</li>
                    <li>∂f/∂y = 2x + 6y</li>
                    <li>∇f = [2x + 2y, 2x + 6y]</li>
                  </ol>
                  <p className="mt-2">
                    <strong>Hessian:</strong>
                  </p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>∂²f/∂x² = 2</li>
                    <li>∂²f/∂x∂y = 2</li>
                    <li>∂²f/∂y∂x = 2</li>
                    <li>∂²f/∂y² = 6</li>
                    <li>H = [[2, 2], [2, 6]]</li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> Gradients are used in gradient descent to update model
                parameters, while Hessians provide information about the curvature of the loss function.
                <p className="mt-2">
                  <strong>Real-world applications:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Newton's Method:</strong> Uses the Hessian to find minima more efficiently
                  </li>
                  <li>
                    <strong>Natural Gradient Descent:</strong> Uses the Fisher information matrix (related to the
                    Hessian) for more efficient optimization
                  </li>
                  <li>
                    <strong>Second-Order Optimization:</strong> Methods like L-BFGS approximate the Hessian for faster
                    convergence
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backpropagation: The Math Behind Deep Learning</CardTitle>
              <CardDescription>Understanding how neural networks learn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Backpropagation?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  An algorithm for efficiently computing gradients in neural networks using the chain rule of calculus.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> Imagine you're part of an assembly line. If
                  the final product has a defect, you need to figure out who in the line contributed to the problem.
                  Backpropagation is like tracing the error backward through the assembly line to find where adjustments
                  are needed.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Derivation</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p>
                    <strong>Consider a simple neural network with:</strong>
                  </p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Input x</li>
                    <li>Weight w</li>
                    <li>Activation function σ</li>
                    <li>Output ŷ = σ(wx)</li>
                    <li>Loss function L(ŷ, y) where y is the true value</li>
                  </ul>

                  <p className="mt-2">
                    <strong>Goal:</strong> Compute ∂L/∂w to update w
                  </p>

                  <p className="mt-2">
                    <strong>Using the chain rule:</strong>
                  </p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>∂L/∂w = (∂L/∂ŷ) × (∂ŷ/∂w)</li>
                    <li>∂ŷ/∂w = ∂σ(wx)/∂w = σ'(wx) × x</li>
                    <li>Therefore: ∂L/∂w = (∂L/∂ŷ) × σ'(wx) × x</li>
                  </ol>

                  <p className="mt-2">
                    <strong>For a multi-layer network:</strong>
                  </p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Compute the output and error at the final layer</li>
                    <li>Propagate the error backward through each layer</li>
                    <li>Update weights using the computed gradients</li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Key Insights:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>Backpropagation is efficient because it reuses computations from earlier layers</li>
                  <li>The chain rule allows us to compute gradients for all weights in a single backward pass</li>
                  <li>Without backpropagation, training deep neural networks would be computationally infeasible</li>
                </ul>
                <p className="mt-2">
                  <strong>Real-world impact:</strong> Backpropagation is the key algorithm that enabled the deep
                  learning revolution, powering applications from image recognition to natural language processing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Information Theory & AI */}
        <div id="information-theory" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">11. Information Theory & AI</h3>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Entropy & Information Gain</CardTitle>
              <CardDescription>Measuring uncertainty and information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is Entropy?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Entropy is a measure of uncertainty or randomness in a system.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Formula:</p>
                  <p className="mt-1">H(X) = -Σ P(x) log₂ P(x)</p>
                  <p className="mt-2 text-xs text-muted-foreground">Where:</p>
                  <ul className="list-disc pl-5 mt-1 text-xs text-muted-foreground">
                    <li>P(x) is the probability of outcome x</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> A fair coin has higher entropy (more
                  uncertainty) than a biased coin that almost always lands on heads.
                </div>
              </div>

              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={entropyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="probability"
                      label={{ value: "Probability (p)", position: "insideBottom", offset: -5 }}
                    />
                    <YAxis label={{ value: "Entropy", angle: -90, position: "insideLeft" }} domain={[0, 1.1]} />
                    <Tooltip formatter={(value) => value.toFixed(4)} />
                    <Line
                      type="monotone"
                      dataKey="entropy"
                      name="Entropy"
                      stroke="#8884d8"
                      dot={false}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="text-sm text-center text-muted-foreground">
                  Entropy of a binary variable with probability p (and 1-p)
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Information Gain</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Information gain measures the reduction in entropy (uncertainty) achieved by splitting data based on a
                  particular feature.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Formula:</p>
                  <p className="mt-1">IG(S, A) = H(S) - Σ (|Sv| / |S|) × H(Sv)</p>
                  <p className="mt-2 text-xs text-muted-foreground">Where:</p>
                  <ul className="list-disc pl-5 mt-1 text-xs text-muted-foreground">
                    <li>S is the dataset</li>
                    <li>A is the attribute</li>
                    <li>Sv is the subset of S where attribute A has value v</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> Information gain is used in decision trees to select the
                most informative features for splitting data.
                <p className="mt-2">
                  <strong>Real-world application:</strong> In a medical diagnosis system, information gain helps
                  identify which symptoms provide the most information about potential diseases.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kullback-Leibler Divergence</CardTitle>
              <CardDescription>Measuring the difference between probability distributions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is KL Divergence?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Kullback-Leibler (KL) divergence measures how one probability distribution differs from a reference
                  distribution.
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Formula:</p>
                  <p className="mt-1">D_KL(P || Q) = Σ P(x) log(P(x) / Q(x))</p>
                  <p className="mt-2 text-xs text-muted-foreground">Where P and Q are probability distributions</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> KL divergence measures the "surprise" when you
                  expect events according to distribution Q but observe them according to distribution P.
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Properties</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <ul className="list-disc pl-5">
                    <li>D_KL(P || Q) ≥ 0 (always non-negative)</li>
                    <li>D_KL(P || Q) = 0 if and only if P = Q</li>
                    <li>D_KL(P || Q) ≠ D_KL(Q || P) (not symmetric)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">In AI:</span> KL divergence is used in various machine learning
                algorithms, particularly in variational inference and generative models.
                <p className="mt-2">
                  <strong>Real-world applications:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Variational Autoencoders (VAEs):</strong> Use KL divergence to ensure the learned latent
                    space follows a desired distribution
                  </li>
                  <li>
                    <strong>Reinforcement Learning:</strong> Policy optimization algorithms like TRPO and PPO use KL
                    divergence to control policy updates
                  </li>
                  <li>
                    <strong>Natural Language Processing:</strong> Topic models use KL divergence to measure the
                    similarity between document-topic distributions
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PART 5: Real-World AI Applications of Mathematics */}
      <section id="part5" className="mb-16">
        <div className="flex items-center mb-6">
          <Database className="h-7 w-7 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">PART 5: Real-World AI Applications of Mathematics</h2>
        </div>

        {/* How AI Uses Probability in Self-Driving Cars */}
        <div id="self-driving" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            12. How AI Uses Probability in Self-Driving Cars
          </h3>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="h-5 w-5 mr-2 text-primary" />
                Probabilistic Reasoning in Autonomous Vehicles
              </CardTitle>
              <CardDescription>
                How self-driving cars use probability to navigate uncertain environments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Bayesian Sensor Fusion</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Self-driving cars combine data from multiple sensors (cameras, lidar, radar) using Bayesian methods to
                  create a coherent understanding of the environment.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Mathematical approach:</span> Each sensor provides a probability
                  distribution over possible states of the environment. Bayes' theorem combines these distributions,
                  giving more weight to more reliable sensors in different conditions.
                  <p className="mt-2">
                    For example, if camera data suggests an 80% chance of a pedestrian ahead, but lidar data suggests
                    only a 20% chance, the system uses Bayes' theorem to resolve this conflict based on each sensor's
                    reliability in current conditions (e.g., lidar might be more reliable in fog).
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Monte Carlo Localization</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Self-driving cars use particle filters (a Monte Carlo method) to maintain a probability distribution
                  over possible vehicle locations.
                </p>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <p className="font-medium">How it works:</p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Generate thousands of "particles" representing possible vehicle positions</li>
                    <li>Update each particle based on vehicle movement (prediction step)</li>
                    <li>Assign weights to particles based on how well they match sensor readings</li>
                    <li>Resample particles with probability proportional to their weights</li>
                    <li>Repeat to continuously track the vehicle's position</li>
                  </ol>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Probabilistic Path Planning</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Self-driving cars use probability distributions to model the future behavior of other road users.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Mathematical approach:</span> For each detected vehicle, the AI
                  maintains multiple hypotheses about its future trajectory, each with an associated probability.
                  <p className="mt-2">For example, a car approaching an intersection might have:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>70% probability of continuing straight</li>
                    <li>20% probability of turning right</li>
                    <li>10% probability of turning left</li>
                  </ul>
                  <p className="mt-2">
                    The self-driving car plans paths that are safe across all these possibilities, weighted by their
                    probabilities.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Mathematical foundations:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Bayesian Networks:</strong> Model dependencies between variables (e.g., weather affecting
                    sensor reliability)
                  </li>
                  <li>
                    <strong>Markov Decision Processes:</strong> Model sequential decision-making under uncertainty
                  </li>
                  <li>
                    <strong>Kalman Filters:</strong> Track objects with Gaussian uncertainty
                  </li>
                  <li>
                    <strong>Monte Carlo Methods:</strong> Sample-based approximations for complex probability
                    distributions
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How AI Uses Calculus for Image Recognition */}
        <div id="image-recognition" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            13. How AI Uses Calculus for Image Recognition
          </h3>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Image className="h-5 w-5 mr-2 text-primary" />
                Calculus in Computer Vision
              </CardTitle>
              <CardDescription>How derivatives and optimization power image recognition systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Convolutional Neural Networks (CNNs)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  CNNs use calculus-based optimization to learn filters that detect features in images.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Mathematical foundation:</span> The convolution operation is essentially
                  calculating weighted sums across the image. During training, calculus (specifically backpropagation)
                  computes derivatives to adjust these weights.
                  <p className="mt-2">
                    For a convolutional layer with weights w, the gradient ∇L/∇w tells us how to adjust each weight to
                    improve performance. This gradient is computed using the chain rule from calculus.
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Image Gradients for Feature Detection</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Calculus helps identify edges and features in images by calculating how pixel values change.
                </p>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <p className="font-medium">Sobel operator for edge detection:</p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Calculate the gradient in the x-direction (∂I/∂x) using a convolution filter</li>
                    <li>Calculate the gradient in the y-direction (∂I/∂y) using another convolution filter</li>
                    <li>Compute the gradient magnitude: √((∂I/∂x)² + (∂I/∂y)²)</li>
                    <li>Compute the gradient direction: arctan(∂I/∂y / ∂I/∂x)</li>
                  </ol>
                  <p className="mt-2">
                    These gradients highlight edges and provide information about their orientation.
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Optimization in Deep Learning</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Calculus-based optimization algorithms train neural networks for image recognition.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Mathematical approach:</span> Stochastic Gradient Descent (SGD) and its
                  variants use derivatives to minimize the loss function.
                  <p className="mt-2">For each parameter θ in the network:</p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Calculate the partial derivative ∂L/∂θ using backpropagation</li>
                    <li>Update the parameter: θ = θ - α × ∂L/∂θ</li>
                  </ol>
                  <p className="mt-2">
                    Advanced optimizers like Adam use additional calculus concepts like momentum and adaptive learning
                    rates to improve convergence.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Real-world applications:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Facial Recognition:</strong> Uses gradients to identify facial features and their
                    relationships
                  </li>
                  <li>
                    <strong>Medical Image Analysis:</strong> Detects anomalies in X-rays, MRIs, and CT scans
                  </li>
                  <li>
                    <strong>Autonomous Navigation:</strong> Identifies objects, lanes, and obstacles from camera feeds
                  </li>
                  <li>
                    <strong>Augmented Reality:</strong> Tracks features to overlay digital content on the physical world
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How AI Uses Statistics for Fraud Detection */}
        <div id="fraud-detection" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            14. How AI Uses Statistics for Fraud Detection
          </h3>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Statistical Methods in Fraud Detection
              </CardTitle>
              <CardDescription>How statistical techniques identify suspicious patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Anomaly Detection</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Statistical methods identify transactions that deviate significantly from normal patterns.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Mathematical approach:</span> Z-scores and Mahalanobis distance measure
                  how far a transaction deviates from the mean in terms of standard deviations.
                  <p className="mt-2">For a transaction with value x, the z-score is calculated as:</p>
                  <p className="font-mono mt-1">z = (x - μ) / σ</p>
                  <p className="mt-2">
                    Where μ is the mean and σ is the standard deviation of normal transactions. Transactions with |z|
                    &gt; 3 are often flagged as suspicious (more than 3 standard deviations from the mean).
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Bayesian Networks</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Probabilistic graphical models capture relationships between variables to identify suspicious
                  patterns.
                </p>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <p className="font-medium">How it works:</p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Model variables like transaction amount, location, time, merchant category, etc.</li>
                    <li>Learn conditional probabilities between these variables from historical data</li>
                    <li>Calculate the probability of fraud given observed variables using Bayes' theorem</li>
                    <li>Flag transactions with high fraud probability for review</li>
                  </ol>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Time Series Analysis</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Statistical methods detect unusual temporal patterns in transaction data.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Mathematical approach:</span> ARIMA (AutoRegressive Integrated Moving
                  Average) models capture normal temporal patterns and identify deviations.
                  <p className="mt-2">
                    For example, a sudden spike in transaction frequency or amount that doesn't align with historical
                    patterns (like weekend shopping or monthly bill payments) might indicate fraud.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Statistical foundations:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Hypothesis Testing:</strong> Evaluates whether a transaction is statistically different from
                    normal patterns
                  </li>
                  <li>
                    <strong>Clustering:</strong> Groups similar transactions to identify outliers
                  </li>
                  <li>
                    <strong>Regression Analysis:</strong> Models relationships between variables to detect anomalies
                  </li>

                  <li>
                    <strong>Ensemble Methods:</strong> Combines multiple statistical models for more robust detection
                  </li>
                </ul>
                <p className="mt-2">
                  <strong>Real-world impact:</strong> Financial institutions use these statistical methods to prevent
                  billions in fraud annually, with systems that can evaluate transactions in milliseconds.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How AI Uses Linear Algebra for NLP */}
        <div id="nlp" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-3">
            15. How AI Uses Linear Algebra for NLP
          </h3>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Linear Algebra in Natural Language Processing
              </CardTitle>
              <CardDescription>How vector spaces and matrices power language understanding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Word Embeddings</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Linear algebra enables the representation of words as vectors in a high-dimensional space.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Mathematical approach:</span> Word2Vec, GloVe, and other embedding
                  techniques map words to vectors such that semantically similar words have similar vectors.
                  <p className="mt-2">For example, in a well-trained embedding space:</p>
                  <p className="font-mono mt-1">vector("king") - vector("man") + vector("woman") ≈ vector("queen")</p>
                  <p className="mt-2">
                    This vector arithmetic captures semantic relationships, demonstrating how linear algebra operations
                    correspond to meaningful language operations.
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Document Representation</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Linear algebra techniques represent entire documents as vectors for classification and similarity
                  comparison.
                </p>
                <div className="bg-muted p-3 rounded-md text-sm mb-3">
                  <p className="font-medium">TF-IDF (Term Frequency-Inverse Document Frequency):</p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Represent documents as vectors in a vocabulary-sized space</li>
                    <li>Each dimension corresponds to a word in the vocabulary</li>
                    <li>The value for each dimension is the TF-IDF score: TF-IDF = TF × IDF</li>
                    <li>TF (Term Frequency) = Number of times the word appears in the document</li>
                    <li>
                      IDF (Inverse Document Frequency) = log(Total documents / Number of documents containing the word)
                    </li>
                  </ol>
                  <p className="mt-2">
                    This creates a sparse vector representation that emphasizes important, distinctive words.
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Attention Mechanisms</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Linear algebra operations power attention mechanisms in transformers, the architecture behind models
                  like BERT and GPT.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Mathematical approach:</span> Self-attention computes weighted sums of
                  word representations based on their relevance to each other.
                  <p className="mt-2">The key matrix operations are:</p>
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Query, Key, Value matrices are created through linear transformations of the input</li>
                    <li>Attention scores are computed as: Scores = (Q × K^T) / √d_k</li>
                    <li>These scores are normalized using softmax to get attention weights</li>
                    <li>The output is computed as: Attention(Q, K, V) = softmax(QK^T / √d_k) × V</li>
                  </ol>
                  <p className="mt-2">
                    This matrix multiplication allows the model to focus on relevant parts of the input when generating
                    each part of the output.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Linear algebra foundations:</span>
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <strong>Vector Spaces:</strong> Represent words and documents in continuous spaces
                  </li>
                  <li>
                    <strong>Matrix Factorization:</strong> Techniques like SVD for dimensionality reduction
                  </li>
                  <li>
                    <strong>Tensor Operations:</strong> Multi-dimensional arrays for representing complex language
                    structures
                  </li>
                  <li>
                    <strong>Linear Transformations:</strong> Projections between different representation spaces
                  </li>
                </ul>
                <p className="mt-2">
                  <strong>Real-world applications:</strong> These techniques power chatbots, translation systems,
                  sentiment analysis, and content recommendation systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion & Final Thoughts */}
      <section id="conclusion" className="mb-16">
        <div className="flex items-center mb-6">
          <Lightbulb className="h-7 w-7 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">Conclusion & Final Thoughts</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Mathematics provides the foundation</span> for AI and machine learning
                    algorithms
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Linear algebra</span> helps us represent and manipulate data
                    efficiently
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Calculus</span> enables optimization and understanding of how models
                    learn
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Probability & statistics</span> help us deal with uncertainty and make
                    predictions
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Advanced techniques</span> like regularization help us build better
                    models
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Books</h4>
                  <ul className="list-disc pl-5 mt-1 text-sm text-muted-foreground">
                    <li>"Mathematics for Machine Learning" by Marc Peter Deisenroth</li>
                    <li>"Deep Learning" by Ian Goodfellow, Yoshua Bengio, and Aaron Courville</li>
                    <li>"Pattern Recognition and Machine Learning" by Christopher Bishop</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Online Courses</h4>
                  <ul className="list-disc pl-5 mt-1 text-sm text-muted-foreground">
                    <li>Khan Academy: Linear Algebra, Calculus, and Statistics</li>
                    <li>Coursera: Mathematics for Machine Learning Specialization</li>
                    <li>3Blue1Brown: Essence of Linear Algebra and Calculus (YouTube)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Practice</h4>
                  <ul className="list-disc pl-5 mt-1 text-sm text-muted-foreground">
                    <li>Implement simple algorithms from scratch</li>
                    <li>Work through mathematical proofs step by step</li>
                    <li>Apply concepts to real-world datasets</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Remember</AlertTitle>
          <AlertDescription>
            Mathematical understanding is a journey, not a destination. Start with the fundamentals, build intuition
            through examples, and gradually tackle more complex concepts. The most important thing is to apply what you
            learn to real problems.
          </AlertDescription>
        </Alert>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
            Final Encouragement for Beginners
          </h3>
          <p className="mb-4">
            If you've made it this far, congratulations! You've been introduced to a wide range of mathematical concepts
            that power modern AI systems. Remember that even the most accomplished AI researchers and data scientists
            started as beginners.
          </p>
          <p className="mb-4">
            Don't be intimidated by the breadth and depth of mathematics in AI. Instead, focus on building your
            understanding one concept at a time. Here are some practical tips:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Start with applications:</strong> Learn math concepts in the context of AI problems you find
              interesting
            </li>
            <li>
              <strong>Visualize concepts:</strong> Use tools like Python and matplotlib to create visual representations
            </li>
            <li>
              <strong>Build intuition:</strong> Focus on understanding the "why" behind formulas before memorizing them
            </li>
            <li>
              <strong>Collaborate:</strong> Join online communities where you can ask questions and share insights
            </li>
            <li>
              <strong>Be persistent:</strong> Mathematical thinking is a skill that improves with practice
            </li>
          </ul>
          <p>
            The journey of learning mathematics for AI is challenging but immensely rewarding. Each concept you master
            gives you new tools to solve problems and create innovative solutions. Keep learning, stay curious, and
            enjoy the process!
          </p>
        </div>
      </section>
    </div>
  )
}

