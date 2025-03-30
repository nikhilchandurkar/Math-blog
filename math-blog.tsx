"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, ChevronRight, AlertTriangle } from "lucide-react"
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
} from "recharts"

export default function MathBlog() {
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

  // COLORS
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Mathematics for Data Science, Machine Learning, and AI
        </h1>
        <p className="text-xl text-muted-foreground">From Zero to Advanced: A Comprehensive Guide</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Introduction: Why Mathematics is the Foundation of AI</h2>

        <p className="mb-6">
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
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">PART 1: Core Mathematics Fundamentals</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">1. Numbers & Algebra Refresher</h3>

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
            </CardContent>
          </Card>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">2. Linear Algebra & Matrix Operations</h3>

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
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">3. Calculus: Understanding Change & Optimization</h3>

          <p className="mb-4">
            Calculus is the mathematics of change and is fundamental to how machine learning algorithms improve over
            time.
          </p>

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
                  Notation: f'(x) or df/dx represents the derivative of f with respect to x
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
              <CardTitle>The Chain Rule: Composing Derivatives</CardTitle>
              <CardDescription>Essential for understanding backpropagation in neural networks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-2">What is the Chain Rule?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A formula for computing the derivative of a composite function.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm mb-4">
                  <span className="font-medium">Intuitive example:</span> If your speed affects how quickly your car
                  heats up, and the heat affects how quickly your ice cream melts, the chain rule helps you calculate
                  how your speed affects your ice cream melting.
                </div>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-3">
                  <p className="font-medium">Formula:</p>
                  <div className="mt-1">If y = f(g(x)), then dy/dx = (dy/du) × (du/dx) where u = g(x)</div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Step-by-Step Example</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <p className="font-medium">Find the derivative of f(x) = (3x + 2)⁵</p>
                  <ol className="list-decimal pl-5 mt-1 space-y-1">
                    <li>Let u = 3x + 2, so f(x) = u⁵</li>
                    <li>df/du = 5u⁴ and du/dx = 3</li>
                    <li>By the chain rule: df/dx = (df/du) × (du/dx) = 5u⁴ × 3 = 15u⁴</li>
                    <li>Substituting back: df/dx = 15(3x + 2)⁴</li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                <span className="font-medium">Real-world application:</span> In deep learning, the chain rule allows
                errors to propagate backward through layers of a neural network (backpropagation).
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">PART 2: Probability & Statistics for AI</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">4. Probability Theory</h3>

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
                  <p className="font-medium">Formula:</p>
                  <div className="mt-1">P(A|B) = [P(B|A) × P(A)] / P(B)</div>
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

        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">5. Probability Distributions</h3>

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
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">PART 3: Advanced Mathematics for AI & Machine Learning</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">6. Optimization Techniques in AI</h3>

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

          <Card>
            <CardHeader>
              <CardTitle>Regularization Techniques</CardTitle>
              <CardDescription>Methods to prevent overfitting in machine learning models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">L1 Regularization (Lasso)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Adds the absolute value of coefficients as a penalty term to the loss function.
                  </p>
                  <div className="font-mono text-sm mb-2">Loss = Error + λ × Σ|w|</div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                    <span className="font-medium">Effect:</span> Encourages sparse models by setting some coefficients
                    to exactly zero (feature selection).
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">L2 Regularization (Ridge)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Adds the squared value of coefficients as a penalty term to the loss function.
                  </p>
                  <div className="font-mono text-sm mb-2">Loss = Error + λ × Σw²</div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                    <span className="font-medium">Effect:</span> Shrinks coefficients toward zero but rarely sets them
                    exactly to zero.
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">Dropout</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Randomly "drops out" (sets to zero) a percentage of neurons during training.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-md text-sm">
                    <span className="font-medium">Effect:</span> Forces the network to learn redundant representations
                    and prevents co-adaptation of neurons.
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">How Regularization Helps</h4>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md text-sm">
                  <p>
                    Regularization techniques add constraints to the model, effectively reducing its complexity. This
                    helps prevent overfitting by discouraging the model from learning noise in the training data.
                  </p>
                  <p className="mt-2">
                    In the bias-variance tradeoff, regularization helps find the sweet spot where the model is complex
                    enough to capture important patterns (low bias) but not so complex that it memorizes the training
                    data (low variance).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Conclusion & Further Learning</h2>

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
      </section>
    </div>
  )
}

// Helper function for factorial calculation
function factorial(n: number): number {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}

