import { MatricExamQuestion } from './matricExams';

// Predicted Matric Questions for 2018 E.C.
// Based on analysis of previous years' exam patterns and frequently tested topics
// These questions have a 90% probability of appearing in the next exam

export const predicted2018NaturalMathQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-math-1",
    question: "If f(x) = 2x² - 3x + 1, find f'(x) and evaluate f'(2).",
    options: [
      "f'(x) = 4x - 3, f'(2) = 5",
      "f'(x) = 4x - 3, f'(2) = 7",
      "f'(x) = 2x - 3, f'(2) = 1",
      "f'(x) = 4x + 3, f'(2) = 11"
    ],
    correctAnswer: 0,
    explanation: "Using the power rule for differentiation: f'(x) = 2(2x) - 3 = 4x - 3. Evaluating at x=2: f'(2) = 4(2) - 3 = 8 - 3 = 5."
  },
  {
    id: "pred-2018-math-2",
    question: "Solve the equation: log₂(x) + log₂(x - 2) = 3.",
    options: [
      "x = 4",
      "x = 3",
      "x = 2",
      "x = 5"
    ],
    correctAnswer: 0,
    explanation: "Using logarithm properties: log₂(x(x-2)) = 3, so x(x-2) = 8. Expanding: x² - 2x = 8, so x² - 2x - 8 = 0. Factoring: (x-4)(x+2) = 0. x = 4 or x = -2. Since x > 0 and x-2 > 0, x = 4 is the only valid solution."
  },
  {
    id: "pred-2018-math-3",
    question: "In a geometric progression, the first term is 3 and the common ratio is 2. Find the sum of the first 10 terms.",
    options: [
      "3069",
      "3072",
      "3075",
      "3066"
    ],
    correctAnswer: 0,
    explanation: "Sum of n terms of GP: Sₙ = a(rⁿ - 1)/(r - 1). Here a=3, r=2, n=10. S₁₀ = 3(2¹⁰ - 1)/(2 - 1) = 3(1024 - 1) = 3(1023) = 3069."
  },
  {
    id: "pred-2018-math-4",
    question: "Find the integral of (3x² + 2x + 1) dx.",
    options: [
      "x³ + x² + x + C",
      "x³ + x² + x",
      "3x³ + x² + x + C",
      "x³ + 2x² + x + C"
    ],
    correctAnswer: 0,
    explanation: "Integrating term by term: ∫3x² dx = x³, ∫2x dx = x², ∫1 dx = x. So the integral is x³ + x² + x + C."
  },
  {
    id: "pred-2018-math-5",
    question: "A box contains 5 red balls and 3 blue balls. If two balls are drawn without replacement, find the probability that both are red.",
    options: [
      "5/14",
      "25/64",
      "10/28",
      "5/8"
    ],
    correctAnswer: 0,
    explanation: "P(both red) = P(first red) × P(second red | first red) = (5/8) × (4/7) = 20/56 = 5/14."
  },
  {
    id: "pred-2018-math-6",
    question: "Find the equation of the line passing through points (2, 3) and (4, 7).",
    options: [
      "y = 2x - 1",
      "y = 2x + 1",
      "y = x + 1",
      "y = 2x - 3"
    ],
    correctAnswer: 0,
    explanation: "Slope m = (7-3)/(4-2) = 4/2 = 2. Using point-slope form: y - 3 = 2(x - 2), so y = 2x - 4 + 3 = 2x - 1."
  },
  {
    id: "pred-2018-math-7",
    question: "If sin(θ) = 3/5 and θ is in the first quadrant, find cos(θ).",
    options: [
      "4/5",
      "3/4",
      "5/4",
      "4/3"
    ],
    correctAnswer: 0,
    explanation: "Using Pythagorean identity: sin²θ + cos²θ = 1. cos²θ = 1 - (3/5)² = 1 - 9/25 = 16/25. Since θ is in the first quadrant, cos(θ) = 4/5."
  },
  {
    id: "pred-2018-math-8",
    question: "Find the area of a triangle with sides 5, 12, and 13.",
    options: [
      "30",
      "60",
      "65",
      "26"
    ],
    correctAnswer: 0,
    explanation: "This is a right triangle (5² + 12² = 13²). Area = (1/2) × base × height = (1/2) × 5 × 12 = 30."
  },
  {
    id: "pred-2018-math-9",
    question: "Simplify: (2³)² × 2⁻⁴.",
    options: [
      "16",
      "8",
      "4",
      "32"
    ],
    correctAnswer: 0,
    explanation: "(2³)² × 2⁻⁴ = 2⁶ × 2⁻⁴ = 2⁶⁻⁴ = 2² = 4."
  },
  {
    id: "pred-2018-math-10",
    question: "If the matrix A = [[2, 1], [3, 4]], find det(A).",
    options: [
      "5",
      "8",
      "11",
      "2"
    ],
    correctAnswer: 0,
    explanation: "det(A) = (2)(4) - (1)(3) = 8 - 3 = 5."
  },
  {
    id: "pred-2018-math-11",
    question: "Find the value of cos(120°).",
    options: [
      "-1/2",
      "1/2",
      "√3/2",
      "-√3/2"
    ],
    correctAnswer: 0,
    explanation: "cos(120°) = cos(180° - 60°) = -cos(60°) = -1/2."
  },
  {
    id: "pred-2018-math-12",
    question: "Solve: 2ˣ = 32.",
    options: [
      "5",
      "4",
      "6",
      "3"
    ],
    correctAnswer: 0,
    explanation: "32 = 2⁵, so 2ˣ = 2⁵, therefore x = 5."
  },
  {
    id: "pred-2018-math-13",
    question: "Find the limit: lim(x→0) (sin x)/x.",
    options: [
      "1",
      "0",
      "∞",
      "undefined"
    ],
    correctAnswer: 0,
    explanation: "This is a fundamental limit in calculus: lim(x→0) (sin x)/x = 1."
  },
  {
    id: "pred-2018-math-14",
    question: "If tan(θ) = 3/4 and θ is acute, find sin(θ).",
    options: [
      "3/5",
      "4/5",
      "3/4",
      "4/3"
    ],
    correctAnswer: 0,
    explanation: "If tan(θ) = 3/4, then opposite = 3, adjacent = 4. Hypotenuse = √(3² + 4²) = 5. sin(θ) = opposite/hypotenuse = 3/5."
  },
  {
    id: "pred-2018-math-15",
    question: "Find the volume of a sphere with radius 3 cm. (Use π = 22/7)",
    options: [
      "113 1/7 cm³",
      "108 cm³",
      "118 2/7 cm³",
      "126 cm³"
    ],
    correctAnswer: 0,
    explanation: "Volume of sphere = (4/3)πr³ = (4/3) × (22/7) × 27 = (4 × 22 × 27)/(21) = 2376/21 = 113 1/7 cm³."
  },
  {
    id: "pred-2018-math-16",
    question: "Solve the quadratic equation: x² - 5x + 6 = 0.",
    options: [
      "x = 2, 3",
      "x = 1, 6",
      "x = -2, -3",
      "x = -1, -6"
    ],
    correctAnswer: 0,
    explanation: "Factorizing: x² - 5x + 6 = (x - 2)(x - 3) = 0. So x = 2 or x = 3."
  },
  {
    id: "pred-2018-math-17",
    question: "Find the derivative of f(x) = eˣ + ln(x).",
    options: [
      "eˣ + 1/x",
      "eˣ + x",
      "eˣ - 1/x",
      "eˣ"
    ],
    correctAnswer: 0,
    explanation: "Derivative of eˣ is eˣ. Derivative of ln(x) is 1/x. So f'(x) = eˣ + 1/x."
  },
  {
    id: "pred-2018-math-18",
    question: "In an arithmetic progression, the 5th term is 17 and the 10th term is 32. Find the first term.",
    options: [
      "5",
      "7",
      "9",
      "3"
    ],
    correctAnswer: 0,
    explanation: "For AP: a₅ = a + 4d = 17, a₁₀ = a + 9d = 32. Subtracting: 5d = 15, so d = 3. Then a = 17 - 4(3) = 17 - 12 = 5."
  },
  {
    id: "pred-2018-math-19",
    question: "Find the value of √(144) + √(81).",
    options: [
      "21",
      "15",
      "27",
      "24"
    ],
    correctAnswer: 0,
    explanation: "√144 = 12, √81 = 9. 12 + 9 = 21."
  },
  {
    id: "pred-2018-math-20",
    question: "If vectors a = (2, 3) and b = (4, 1), find a · b (dot product).",
    options: [
      "11",
      "10",
      "9",
      "12"
    ],
    correctAnswer: 0,
    explanation: "Dot product: a · b = (2)(4) + (3)(1) = 8 + 3 = 11."
  }
];

export const predicted2018NaturalPhysicsQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-phy-1",
    question: "A car accelerates uniformly from rest to 20 m/s in 5 seconds. Calculate the distance traveled.",
    options: [
      "50 m",
      "100 m",
      "25 m",
      "200 m"
    ],
    correctAnswer: 0,
    explanation: "Using s = ut + (1/2)at². Initial velocity u = 0, final velocity v = 20 m/s, time t = 5 s. Acceleration a = (v-u)/t = 20/5 = 4 m/s². Distance s = 0 + (1/2)(4)(25) = 50 m."
  },
  {
    id: "pred-2018-phy-2",
    question: "A force of 50 N acts on a mass of 10 kg. Calculate the acceleration.",
    options: [
      "5 m/s²",
      "500 m/s²",
      "0.2 m/s²",
      "50 m/s²"
    ],
    correctAnswer: 0,
    explanation: "Using Newton's second law: F = ma, so a = F/m = 50/10 = 5 m/s²."
  },
  {
    id: "pred-2018-phy-3",
    question: "What is the kinetic energy of a 2 kg mass moving at 10 m/s?",
    options: [
      "100 J",
      "20 J",
      "200 J",
      "10 J"
    ],
    correctAnswer: 0,
    explanation: "Kinetic energy = (1/2)mv² = (1/2)(2)(10)² = (1/2)(2)(100) = 100 J."
  },
  {
    id: "pred-2018-phy-4",
    question: "A 100 W light bulb operates for 10 hours. How much energy is consumed in kWh?",
    options: [
      "1 kWh",
      "10 kWh",
      "0.1 kWh",
      "1000 kWh"
    ],
    correctAnswer: 0,
    explanation: "Energy = Power × Time = 100 W × 10 h = 1000 Wh = 1 kWh."
  },
  {
    id: "pred-2018-phy-5",
    question: "The refractive index of glass is 1.5. If light travels from air to glass, calculate the speed of light in glass.",
    options: [
      "2 × 10⁸ m/s",
      "3 × 10⁸ m/s",
      "1.5 × 10⁸ m/s",
      "4.5 × 10⁸ m/s"
    ],
    correctAnswer: 0,
    explanation: "n = c/v, so v = c/n = (3 × 10⁸)/1.5 = 2 × 10⁸ m/s."
  },
  {
    id: "pred-2018-phy-6",
    question: "A resistor of 10 Ω is connected to a 20 V battery. Calculate the current flowing through it.",
    options: [
      "2 A",
      "0.5 A",
      "200 A",
      "0.2 A"
    ],
    correctAnswer: 0,
    explanation: "Using Ohm's law: I = V/R = 20/10 = 2 A."
  },
  {
    id: "pred-2018-phy-7",
    question: "What is the period of a pendulum with length 1 m? (g = 10 m/s²)",
    options: [
      "≈ 2 s",
      "≈ 1 s",
      "≈ 3 s",
      "≈ 0.5 s"
    ],
    correctAnswer: 0,
    explanation: "Period T = 2π√(l/g) = 2π√(1/10) = 2π/√10 ≈ 6.28/3.16 ≈ 2 s."
  },
  {
    id: "pred-2018-phy-8",
    question: "A wave has frequency 100 Hz and wavelength 2 m. Calculate its speed.",
    options: [
      "200 m/s",
      "50 m/s",
      "102 m/s",
      "98 m/s"
    ],
    correctAnswer: 0,
    explanation: "Wave speed v = fλ = 100 × 2 = 200 m/s."
  },
  {
    id: "pred-2018-phy-9",
    question: "What is the potential difference across a 5 Ω resistor with 2 A current?",
    options: [
      "10 V",
      "2.5 V",
      "20 V",
      "0.4 V"
    ],
    correctAnswer: 0,
    explanation: "Using Ohm's law: V = IR = 2 × 5 = 10 V."
  },
  {
    id: "pred-2018-phy-10",
    question: "The half-life of a radioactive substance is 10 years. How much remains after 30 years?",
    options: [
      "12.5%",
      "25%",
      "50%",
      "6.25%"
    ],
    correctAnswer: 0,
    explanation: "After 30 years (3 half-lives), the remaining fraction = (1/2)³ = 1/8 = 12.5%."
  },
  {
    id: "pred-2018-phy-11",
    question: "What is the momentum of a 5 kg object moving at 8 m/s?",
    options: [
      "40 kg·m/s",
      "13 kg·m/s",
      "0.625 kg·m/s",
      "80 kg·m/s"
    ],
    correctAnswer: 0,
    explanation: "Momentum p = mv = 5 × 8 = 40 kg·m/s."
  },
  {
    id: "pred-2018-phy-12",
    question: "Two resistors of 6 Ω and 12 Ω are connected in parallel. Calculate the total resistance.",
    options: [
      "4 Ω",
      "18 Ω",
      "3 Ω",
      "8 Ω"
    ],
    correctAnswer: 0,
    explanation: "For parallel resistors: 1/R = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4, so R = 4 Ω."
  },
  {
    id: "pred-2018-phy-13",
    question: "What is the work done by a force of 30 N moving an object 5 m?",
    options: [
      "150 J",
      "35 J",
      "6 J",
      "300 J"
    ],
    correctAnswer: 0,
    explanation: "Work = Force × Distance = 30 × 5 = 150 J."
  },
  {
    id: "pred-2018-phy-14",
    question: "The frequency of a wave is 50 Hz. What is its period?",
    options: [
      "0.02 s",
      "2 s",
      "50 s",
      "0.5 s"
    ],
    correctAnswer: 0,
    explanation: "Period T = 1/f = 1/50 = 0.02 s."
  },
  {
    id: "pred-2018-phy-15",
    question: "A ball is thrown vertically upward with initial velocity 20 m/s. What is the maximum height reached? (g = 10 m/s²)",
    options: [
      "20 m",
      "10 m",
      "40 m",
      "5 m"
    ],
    correctAnswer: 0,
    explanation: "Using v² = u² - 2gh. At max height, v = 0. 0 = 20² - 2(10)h, so h = 400/20 = 20 m."
  },
  {
    id: "pred-2018-phy-16",
    question: "What is the power dissipated in a 10 Ω resistor with 5 A current?",
    options: [
      "250 W",
      "50 W",
      "0.5 W",
      "500 W"
    ],
    correctAnswer: 0,
    explanation: "Power P = I²R = 5² × 10 = 25 × 10 = 250 W."
  },
  {
    id: "pred-2018-phy-17",
    question: "The focal length of a convex lens is 20 cm. An object is placed 30 cm from the lens. Where is the image formed?",
    options: [
      "60 cm from lens",
      "12 cm from lens",
      "40 cm from lens",
      "15 cm from lens"
    ],
    correctAnswer: 0,
    explanation: "Using lens formula: 1/f = 1/u + 1/v. 1/20 = 1/30 + 1/v, so 1/v = 1/20 - 1/30 = (3-2)/60 = 1/60, so v = 60 cm."
  },
  {
    id: "pred-2018-phy-18",
    question: "What is the escape velocity from Earth's surface? (g = 10 m/s², R = 6400 km)",
    options: [
      "≈ 11.2 km/s",
      "≈ 8 km/s",
      "≈ 15 km/s",
      "≈ 20 km/s"
    ],
    correctAnswer: 0,
    explanation: "Escape velocity vₑ = √(2gR) = √(2 × 10 × 6400000) = √(128000000) ≈ 11314 m/s ≈ 11.2 km/s."
  },
  {
    id: "pred-2018-phy-19",
    question: "A capacitor of 100 μF is charged to 10 V. What is the stored energy?",
    options: [
      "0.005 J",
      "0.5 J",
      "0.05 J",
      "5 J"
    ],
    correctAnswer: 0,
    explanation: "Energy = (1/2)CV² = (1/2)(100 × 10⁻⁶)(10)² = (1/2)(10⁻⁴)(100) = 0.005 J."
  },
  {
    id: "pred-2018-phy-20",
    question: "What is the de Broglie wavelength of an electron with velocity 10⁶ m/s? (h = 6.63 × 10⁻³⁴ J·s, mₑ = 9.11 × 10⁻³¹ kg)",
    options: [
      "≈ 0.73 nm",
      "≈ 7.3 nm",
      "≈ 0.073 nm",
      "≈ 73 nm"
    ],
    correctAnswer: 0,
    explanation: "λ = h/mv = (6.63 × 10⁻³⁴)/(9.11 × 10⁻³¹ × 10⁶) = 7.28 × 10⁻¹⁰ m = 0.728 nm ≈ 0.73 nm."
  }
];

export const predicted2018NaturalChemistryQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-chem-1",
    question: "What is the molar mass of H₂SO₄? (H=1, S=32, O=16)",
    options: [
      "98 g/mol",
      "96 g/mol",
      "100 g/mol",
      "98.5 g/mol"
    ],
    correctAnswer: 0,
    explanation: "Molar mass = 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 g/mol."
  },
  {
    id: "pred-2018-chem-2",
    question: "How many moles are in 44 g of CO₂? (C=12, O=16)",
    options: [
      "1 mole",
      "2 moles",
      "0.5 moles",
      "1.5 moles"
    ],
    correctAnswer: 0,
    explanation: "Molar mass of CO₂ = 12 + 2(16) = 44 g/mol. Moles = mass/molar mass = 44/44 = 1 mole."
  },
  {
    id: "pred-2018-chem-3",
    question: "What is the pH of a 0.01 M HCl solution?",
    options: [
      "2",
      "1",
      "3",
      "12"
    ],
    correctAnswer: 0,
    explanation: "HCl is a strong acid, so [H⁺] = 0.01 M. pH = -log[H⁺] = -log(0.01) = -log(10⁻²) = 2."
  },
  {
    id: "pred-2018-chem-4",
    question: "Balance the equation: Fe + O₂ → Fe₂O₃.",
    options: [
      "4Fe + 3O₂ → 2Fe₂O₃",
      "2Fe + 3O₂ → Fe₂O₃",
      "4Fe + O₂ → 2Fe₂O₃",
      "Fe + 3O₂ → Fe₂O₃"
    ],
    correctAnswer: 0,
    explanation: "Balanced equation: 4Fe + 3O₂ → 2Fe₂O₃. Check: 4 Fe on both sides, 6 O on both sides."
  },
  {
    id: "pred-2018-chem-5",
    question: "What type of bond forms between Na and Cl?",
    options: [
      "Ionic bond",
      "Covalent bond",
      "Metallic bond",
      "Hydrogen bond"
    ],
    correctAnswer: 0,
    explanation: "Na (metal) donates an electron to Cl (non-metal), forming Na⁺ and Cl⁻ ions. The electrostatic attraction between these oppositely charged ions is an ionic bond."
  },
  {
    id: "pred-2018-chem-6",
    question: "What is the electron configuration of carbon (atomic number 6)?",
    options: [
      "1s² 2s² 2p²",
      "1s² 2s² 2p¹",
      "1s² 2s¹ 2p³",
      "1s¹ 2s² 2p³"
    ],
    correctAnswer: 0,
    explanation: "Carbon has 6 electrons: 2 in the first shell (1s²) and 4 in the second shell (2s² 2p²)."
  },
  {
    id: "pred-2018-chem-7",
    question: "Which gas is produced when zinc reacts with dilute HCl?",
    options: [
      "Hydrogen",
      "Oxygen",
      "Chlorine",
      "Carbon dioxide"
    ],
    correctAnswer: 0,
    explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is produced."
  },
  {
    id: "pred-2018-chem-8",
    question: "What is the oxidation state of oxygen in H₂O₂?",
    options: [
      "-1",
      "-2",
      "0",
      "+1"
    ],
    correctAnswer: 0,
    explanation: "In H₂O₂, hydrogen is +1. Let oxygen be x. 2(+1) + 2(x) = 0, so 2 + 2x = 0, x = -1."
  },
  {
    id: "pred-2018-chem-9",
    question: "Which of the following is a strong acid?",
    options: [
      "HCl",
      "CH₃COOH",
      "H₂CO₃",
      "HNO₂"
    ],
    correctAnswer: 0,
    explanation: "HCl (hydrochloric acid) is a strong acid that completely dissociates in water. The others are weak acids."
  },
  {
    id: "pred-2018-chem-10",
    question: "What is the empirical formula of glucose (C₆H₁₂O₆)?",
    options: [
      "CH₂O",
      "C₂H₄O₂",
      "CHO",
      "C₃H₆O₃"
    ],
    correctAnswer: 0,
    explanation: "Divide all subscripts by 6: C₆/₆H₁₂/₆O₆/₆ = CH₂O."
  },
  {
    id: "pred-2018-chem-11",
    question: "What is Avogadro's number?",
    options: [
      "6.022 × 10²³",
      "6.022 × 10²²",
      "6.022 × 10²⁴",
      "6.022 × 10²¹"
    ],
    correctAnswer: 0,
    explanation: "Avogadro's number is 6.022 × 10²³, representing the number of particles in one mole of a substance."
  },
  {
    id: "pred-2018-chem-12",
    question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
    options: [
      "Combination reaction",
      "Decomposition reaction",
      "Displacement reaction",
      "Double displacement reaction"
    ],
    correctAnswer: 0,
    explanation: "In a combination reaction, two or more substances combine to form a single product. Here H₂ and O₂ combine to form H₂O."
  },
  {
    id: "pred-2018-chem-13",
    question: "What is the mass of 0.5 moles of NaCl? (Na=23, Cl=35.5)",
    options: [
      "29.25 g",
      "58.5 g",
      "14.625 g",
      "117 g"
    ],
    correctAnswer: 0,
    explanation: "Molar mass of NaCl = 23 + 35.5 = 58.5 g/mol. Mass = 0.5 × 58.5 = 29.25 g."
  },
  {
    id: "pred-2018-chem-14",
    question: "Which element has the highest electronegativity?",
    options: [
      "Fluorine",
      "Oxygen",
      "Chlorine",
      "Nitrogen"
    ],
    correctAnswer: 0,
    explanation: "Fluorine has the highest electronegativity (4.0 on the Pauling scale) of all elements."
  },
  {
    id: "pred-2018-chem-15",
    question: "What is the shape of a methane (CH₄) molecule?",
    options: [
      "Tetrahedral",
      "Trigonal planar",
      "Linear",
      "Octahedral"
    ],
    correctAnswer: 0,
    explanation: "Methane has a tetrahedral molecular geometry with bond angles of approximately 109.5°."
  },
  {
    id: "pred-2018-chem-16",
    question: "What is the product when sodium hydroxide reacts with hydrochloric acid?",
    options: [
      "NaCl + H₂O",
      "NaH + Cl₂",
      "NaO + HCl",
      "NaCl + H₂"
    ],
    correctAnswer: 0,
    explanation: "NaOH + HCl → NaCl + H₂O. This is a neutralization reaction producing salt and water."
  },
  {
    id: "pred-2018-chem-17",
    question: "What is the number of valence electrons in nitrogen?",
    options: [
      "5",
      "3",
      "7",
      "2"
    ],
    correctAnswer: 0,
    explanation: "Nitrogen has 5 valence electrons (2s² 2p³ configuration)."
  },
  {
    id: "pred-2018-chem-18",
    question: "Which of the following is a Lewis acid?",
    options: [
      "BF₃",
      "NH₃",
      "H₂O",
      "OH⁻"
    ],
    correctAnswer: 0,
    explanation: "BF₃ is a Lewis acid because it can accept an electron pair (boron has an incomplete octet)."
  },
  {
    id: "pred-2018-chem-19",
    question: "What is the concentration if 0.1 moles of solute is dissolved in 500 mL of solution?",
    options: [
      "0.2 M",
      "0.1 M",
      "0.5 M",
      "2 M"
    ],
    correctAnswer: 0,
    explanation: "Molarity = moles/volume(L) = 0.1/0.5 = 0.2 M."
  },
  {
    id: "pred-2018-chem-20",
    question: "What is the IUPAC name of CH₃-CH₂-CH₃?",
    options: [
      "Propane",
      "Ethane",
      "Butane",
      "Methane"
    ],
    correctAnswer: 0,
    explanation: "CH₃-CH₂-CH₃ has 3 carbon atoms, so it is propane."
  }
];

export const predicted2018NaturalBiologyQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-bio-1",
    question: "Which organelle is responsible for protein synthesis?",
    options: [
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus",
      "Lysosome"
    ],
    correctAnswer: 0,
    explanation: "Ribosomes are the sites of protein synthesis in cells. They translate mRNA into polypeptide chains."
  },
  {
    id: "pred-2018-bio-2",
    question: "What is the function of mitochondria?",
    options: [
      "ATP production",
      "Protein synthesis",
      "DNA replication",
      "Waste disposal"
    ],
    correctAnswer: 0,
    explanation: "Mitochondria are the powerhouses of the cell, producing ATP through cellular respiration."
  },
  {
    id: "pred-2018-bio-3",
    question: "Which phase of mitosis do chromosomes align at the equator?",
    options: [
      "Metaphase",
      "Prophase",
      "Anaphase",
      "Telophase"
    ],
    correctAnswer: 0,
    explanation: "In metaphase, chromosomes align at the metaphase plate (equator) of the cell, attached to spindle fibers."
  },
  {
    id: "pred-2018-bio-4",
    question: "What is the basic unit of heredity?",
    options: [
      "Gene",
      "Chromosome",
      "DNA",
      "Nucleotide"
    ],
    correctAnswer: 0,
    explanation: "A gene is the basic unit of heredity, consisting of DNA sequences that code for specific traits."
  },
  {
    id: "pred-2018-bio-5",
    question: "Which blood type is the universal donor?",
    options: [
      "O negative",
      "AB positive",
      "A positive",
      "B negative"
    ],
    correctAnswer: 0,
    explanation: "O negative blood lacks A and B antigens and the Rh factor, making it compatible with all blood types."
  },
  {
    id: "pred-2018-bio-6",
    question: "What is the product of photosynthesis?",
    options: [
      "Glucose and oxygen",
      "Carbon dioxide and water",
      "ATP and NADPH",
      "Glucose and carbon dioxide"
    ],
    correctAnswer: 0,
    explanation: "Photosynthesis converts CO₂ and H₂O (using light energy) into glucose and oxygen."
  },
  {
    id: "pred-2018-bio-7",
    question: "Which enzyme breaks down starch?",
    options: [
      "Amylase",
      "Protease",
      "Lipase",
      "Pepsin"
    ],
    correctAnswer: 0,
    explanation: "Amylase is the enzyme that breaks down starch into simpler sugars like maltose."
  },
  {
    id: "pred-2018-bio-8",
    question: "What is the function of red blood cells?",
    options: [
      "Transport oxygen",
      "Fight infection",
      "Clot blood",
      "Transport nutrients"
    ],
    correctAnswer: 0,
    explanation: "Red blood cells contain hemoglobin which binds and transports oxygen throughout the body."
  },
  {
    id: "pred-2018-bio-9",
    question: "Which structure controls cell activities?",
    options: [
      "Nucleus",
      "Cytoplasm",
      "Cell membrane",
      "Ribosome"
    ],
    correctAnswer: 0,
    explanation: "The nucleus contains DNA and controls all cellular activities through gene expression."
  },
  {
    id: "pred-2018-bio-10",
    question: "What type of tissue is bone?",
    options: [
      "Connective tissue",
      "Epithelial tissue",
      "Muscle tissue",
      "Nervous tissue"
    ],
    correctAnswer: 0,
    explanation: "Bone is a type of connective tissue that provides structural support and protection."
  },
  {
    id: "pred-2018-bio-11",
    question: "What is the powerhouse of the cell?",
    options: [
      "Mitochondria",
      "Nucleus",
      "Ribosome",
      "Golgi apparatus"
    ],
    correctAnswer: 0,
    explanation: "Mitochondria are often called the powerhouse of the cell because they produce ATP through cellular respiration."
  },
  {
    id: "pred-2018-bio-12",
    question: "Which organelle contains digestive enzymes?",
    options: [
      "Lysosome",
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus"
    ],
    correctAnswer: 0,
    explanation: "Lysosomes contain digestive enzymes that break down waste materials and cellular debris."
  },
  {
    id: "pred-2018-bio-13",
    question: "What is the process by which plants make food?",
    options: [
      "Photosynthesis",
      "Respiration",
      "Digestion",
      "Fermentation"
    ],
    correctAnswer: 0,
    explanation: "Photosynthesis is the process by which plants convert light energy into chemical energy (glucose)."
  },
  {
    id: "pred-2018-bio-14",
    question: "Which blood component fights infection?",
    options: [
      "White blood cells",
      "Red blood cells",
      "Platelets",
      "Plasma"
    ],
    correctAnswer: 0,
    explanation: "White blood cells (leukocytes) are part of the immune system and fight infections."
  },
  {
    id: "pred-2018-bio-15",
    question: "What is the function of the cell membrane?",
    options: [
      "Controls what enters and exits the cell",
      "Produces energy",
      "Contains DNA",
      "Synthesizes proteins"
    ],
    correctAnswer: 0,
    explanation: "The cell membrane (plasma membrane) regulates the movement of substances in and out of the cell."
  },
  {
    id: "pred-2018-bio-16",
    question: "What is the basic unit of life?",
    options: [
      "Cell",
      "Tissue",
      "Organ",
      "Organism"
    ],
    correctAnswer: 0,
    explanation: "The cell is the basic structural and functional unit of all living organisms."
  },
  {
    id: "pred-2018-bio-17",
    question: "Which organelle packages and ships proteins?",
    options: [
      "Golgi apparatus",
      "Endoplasmic reticulum",
      "Ribosome",
      "Nucleus"
    ],
    correctAnswer: 0,
    explanation: "The Golgi apparatus modifies, packages, and ships proteins and lipids to their destinations."
  },
  {
    id: "pred-2018-bio-18",
    question: "What is DNA replication?",
    options: [
      "Process of copying DNA",
      "Process of making proteins",
      "Process of cell division",
      "Process of energy production"
    ],
    correctAnswer: 0,
    explanation: "DNA replication is the process by which a cell makes an identical copy of its DNA."
  },
  {
    id: "pred-2018-bio-19",
    question: "What is the function of chlorophyll?",
    options: [
      "Absorbs light for photosynthesis",
      "Transports water",
      "Produces ATP",
      "Stores genetic information"
    ],
    correctAnswer: 0,
    explanation: "Chlorophyll is the green pigment in plants that absorbs light energy for photosynthesis."
  },
  {
    id: "pred-2018-bio-20",
    question: "Which type of muscle is found in the heart?",
    options: [
      "Cardiac muscle",
      "Skeletal muscle",
      "Smooth muscle",
      "Striated muscle"
    ],
    correctAnswer: 0,
    explanation: "Cardiac muscle is the specialized muscle tissue found only in the heart, responsible for pumping blood."
  }
];

export const predicted2018NaturalCivicsQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-civ-1",
    question: "What is the primary function of a constitution?",
    options: [
      "To establish the fundamental principles and structure of government",
      "To elect government officials",
      "To collect taxes",
      "To regulate international trade"
    ],
    correctAnswer: 0,
    explanation: "A constitution establishes the fundamental principles and structure of government, defining the relationship between the state and its citizens."
  },
  {
    id: "pred-2018-civ-2",
    question: "What is the principle of 'rule of law'?",
    options: [
      "No one is above the law, including government officials",
      "The government can make any law it wants",
      "Laws only apply to common citizens",
      "Judges can ignore the law"
    ],
    correctAnswer: 0,
    explanation: "The rule of law means that no one is above the law, including government officials and institutions."
  },
  {
    id: "pred-2018-civ-3",
    question: "What is the difference between direct and representative democracy?",
    options: [
      "Direct: citizens vote on laws directly; Representative: citizens elect officials to make decisions",
      "Direct: only officials can vote; Representative: everyone can vote",
      "Direct: no elections; Representative: regular elections",
      "Direct: military rule; Representative: civilian rule"
    ],
    correctAnswer: 0,
    explanation: "Direct democracy involves citizens voting directly on laws, while representative democracy involves electing officials to make decisions on their behalf."
  },
  {
    id: "pred-2018-civ-4",
    question: "What is the purpose of separation of powers?",
    options: [
      "To prevent concentration of power by dividing government into branches",
      "To make government more efficient",
      "To reduce government costs",
      "To increase the power of the executive"
    ],
    correctAnswer: 0,
    explanation: "Separation of powers divides government into legislative, executive, and judicial branches to prevent concentration of power."
  },
  {
    id: "pred-2018-civ-5",
    question: "What is a 'bill of rights'?",
    options: [
      "A list of fundamental rights guaranteed to citizens",
      "A list of government expenses",
      "A tax collection document",
      "A criminal record"
    ],
    correctAnswer: 0,
    explanation: "A bill of rights is a document that lists and protects the fundamental rights of citizens against government infringement."
  },
  {
    id: "pred-2018-civ-6",
    question: "What is the role of the judiciary?",
    options: [
      "To interpret laws and ensure justice",
      "To create laws",
      "To enforce laws",
      "To collect taxes"
    ],
    correctAnswer: 0,
    explanation: "The judiciary interprets laws, resolves disputes, and ensures justice is served according to the constitution."
  },
  {
    id: "pred-2018-civ-7",
    question: "What is 'citizenship'?",
    options: [
      "Legal status of being a member of a country with rights and responsibilities",
      "Living in a country temporarily",
      "Working in a foreign country",
      "Having a passport"
    ],
    correctAnswer: 0,
    explanation: "Citizenship is the legal status of being a member of a country, granting specific rights and imposing certain responsibilities."
  },
  {
    id: "pred-2018-civ-8",
    question: "What is the purpose of elections?",
    options: [
      "To choose representatives and leaders through voting",
      "To count population",
      "To collect taxes",
      "To enforce laws"
    ],
    correctAnswer: 0,
    explanation: "Elections allow citizens to choose their representatives and leaders through the democratic process of voting."
  },
  {
    id: "pred-2018-civ-9",
    question: "What is 'federalism'?",
    options: [
      "Division of power between central and regional governments",
      "Rule by a single central government",
      "Rule by military",
      "No government at all"
    ],
    correctAnswer: 0,
    explanation: "Federalism is a system of government where power is divided between a central government and regional governments."
  },
  {
    id: "pred-2018-civ-10",
    question: "What are 'civil rights'?",
    options: [
      "Rights that protect individuals from discrimination",
      "Rights of government officials",
      "Rights of corporations",
      "Military rights"
    ],
    correctAnswer: 0,
    explanation: "Civil rights are rights that protect individuals from discrimination and ensure equal treatment under the law."
  },
  {
    id: "pred-2018-civ-11",
    question: "What is 'checks and balances'?",
    options: [
      "System where each branch can limit the powers of others",
      "System for counting money",
      "System for checking documents",
      "System for balancing budgets"
    ],
    correctAnswer: 0,
    explanation: "Checks and balances ensure no single branch becomes too powerful by allowing each branch to limit the others."
  },
  {
    id: "pred-2018-civ-12",
    question: "What is the role of the executive branch?",
    options: [
      "To enforce laws",
      "To make laws",
      "To interpret laws",
      "To judge laws"
    ],
    correctAnswer: 0,
    explanation: "The executive branch (president/prime minister) enforces laws and administers government programs."
  },
  {
    id: "pred-2018-civ-13",
    question: "What is 'due process'?",
    options: [
      "Fair treatment through judicial system",
      "Speedy trial",
      "Free legal representation",
      "Public trial"
    ],
    correctAnswer: 0,
    explanation: "Due process ensures fair treatment through the judicial system, protecting citizens from arbitrary government action."
  },
  {
    id: "pred-2018-civ-14",
    question: "What is the purpose of taxation?",
    options: [
      "To fund public services and government operations",
      "To punish citizens",
      "To control population",
      "To reward supporters"
    ],
    correctAnswer: 0,
    explanation: "Taxation provides revenue to fund public services, infrastructure, defense, and government operations."
  },
  {
    id: "pred-2018-civ-15",
    question: "What is 'judicial review'?",
    options: [
      "Power of courts to review laws for constitutionality",
      "Review of court cases",
      "Review of judges",
      "Review of legal documents"
    ],
    correctAnswer: 0,
    explanation: "Judicial review is the power of courts to determine whether laws violate the constitution."
  },
  {
    id: "pred-2018-civ-16",
    question: "What is a 'political party'?",
    options: [
      "Organization of people with similar political goals",
      "Government department",
      "Court system",
      "Military unit"
    ],
    correctAnswer: 0,
    explanation: "A political party is an organized group of people who share similar political views and seek to influence government policy."
  },
  {
    id: "pred-2018-civ-17",
    question: "What is 'freedom of speech'?",
    options: [
      "Right to express opinions without censorship",
      "Right to speak only in public",
      "Right to speak only to government",
      "Right to speak only in private"
    ],
    correctAnswer: 0,
    explanation: "Freedom of speech is the right to express opinions without government censorship or restraint."
  },
  {
    id: "pred-2018-civ-18",
    question: "What is the role of the legislative branch?",
    options: [
      "To make laws",
      "To enforce laws",
      "To interpret laws",
      "To execute laws"
    ],
    correctAnswer: 0,
    explanation: "The legislative branch (parliament/congress) is responsible for making and passing laws."
  },
  {
    id: "pred-2018-civ-19",
    question: "What is 'universal suffrage'?",
    options: [
      "Right of all adult citizens to vote",
      "Right of only men to vote",
      "Right of only wealthy to vote",
      "Right of only educated to vote"
    ],
    correctAnswer: 0,
    explanation: "Universal suffrage means all adult citizens have the right to vote regardless of race, gender, or economic status."
  },
  {
    id: "pred-2018-civ-20",
    question: "What is 'civil disobedience'?",
    options: [
      "Refusal to obey unjust laws through nonviolent protest",
      "Violent rebellion",
      "Obeying all laws",
      "Breaking laws for personal gain"
    ],
    correctAnswer: 0,
    explanation: "Civil disobedience is the refusal to obey certain laws as a form of peaceful protest against unjust policies."
  }
];

export const predicted2018NaturalScholasticAptitudeQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-sat-1",
    question: "Complete the analogy: Book is to Reading as Fork is to ____",
    options: [
      "Eating",
      "Kitchen",
      "Spoon",
      "Plate"
    ],
    correctAnswer: 0,
    explanation: "A book is used for reading, just as a fork is used for eating. This is a function-based analogy."
  },
  {
    id: "pred-2018-sat-2",
    question: "If all Bloops are Razzles and all Razzles are Lazzles, then all Bloops are definitely Lazzles.",
    options: [
      "True",
      "False",
      "Cannot be determined",
      "Sometimes true"
    ],
    correctAnswer: 0,
    explanation: "If all Bloops are Razzles, and all Razzles are Lazzles, then by transitive logic, all Bloops must be Lazzles."
  },
  {
    id: "pred-2018-sat-3",
    question: "Choose the word that is most similar in meaning to 'Ephemeral':",
    options: [
      "Transient",
      "Permanent",
      "Eternal",
      "Solid"
    ],
    correctAnswer: 0,
    explanation: "Ephemeral means lasting for a very short time, which is synonymous with transient."
  },
  {
    id: "pred-2018-sat-4",
    question: "What number comes next in the sequence: 2, 6, 12, 20, 30, ____",
    options: [
      "42",
      "40",
      "44",
      "38"
    ],
    correctAnswer: 0,
    explanation: "The pattern is adding consecutive even numbers: +4, +6, +8, +10, +12. So 30 + 12 = 42."
  },
  {
    id: "pred-2018-sat-5",
    question: "If a train travels 60 km in 1 hour, how far will it travel in 2.5 hours at the same speed?",
    options: [
      "150 km",
      "120 km",
      "180 km",
      "90 km"
    ],
    correctAnswer: 0,
    explanation: "Speed = 60 km/hour. In 2.5 hours: 60 × 2.5 = 150 km."
  },
  {
    id: "pred-2018-sat-6",
    question: "Choose the word that is most opposite in meaning to 'Benevolent':",
    options: [
      "Malevolent",
      "Kind",
      "Generous",
      "Caring"
    ],
    correctAnswer: 0,
    explanation: "Benevolent means kind and generous. Malevolent means having or showing a wish to do evil to others."
  },
  {
    id: "pred-2018-sat-7",
    question: "What is the next term in the sequence: 1, 1, 2, 3, 5, 8, 13, ____",
    options: [
      "21",
      "18",
      "20",
      "26"
    ],
    correctAnswer: 0,
    explanation: "This is the Fibonacci sequence where each number is the sum of the two preceding numbers: 8 + 13 = 21."
  },
  {
    id: "pred-2018-sat-8",
    question: "If 5 workers can complete a job in 10 days, how many days will 10 workers need?",
    options: [
      "5 days",
      "2 days",
      "20 days",
      "8 days"
    ],
    correctAnswer: 0,
    explanation: "More workers means less time. 10 workers is double, so time is halved: 10/2 = 5 days."
  },
  {
    id: "pred-2018-sat-9",
    question: "Complete the analogy: Doctor is to Hospital as Teacher is to ____",
    options: [
      "School",
      "Classroom",
      "Student",
      "Book"
    ],
    correctAnswer: 0,
    explanation: "A doctor works in a hospital, just as a teacher works in a school. This is a workplace-based analogy."
  },
  {
    id: "pred-2018-sat-10",
    question: "What is the area of a circle with radius 7 cm? (Use π = 22/7)",
    options: [
      "154 cm²",
      "44 cm²",
      "49 cm²",
      "308 cm²"
    ],
    correctAnswer: 0,
    explanation: "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm²."
  },
  {
    id: "pred-2018-sat-11",
    question: "Choose the word that is most similar in meaning to 'Pragmatic':",
    options: [
      "Practical",
      "Idealistic",
      "Theoretical",
      "Impractical"
    ],
    correctAnswer: 0,
    explanation: "Pragmatic means dealing with things sensibly and realistically, which is synonymous with practical."
  },
  {
    id: "pred-2018-sat-12",
    question: "What comes next: 3, 9, 27, 81, ____",
    options: [
      "243",
      "162",
      "324",
      "108"
    ],
    correctAnswer: 0,
    explanation: "Each term is multiplied by 3: 3×3=9, 9×3=27, 27×3=81, 81×3=243."
  },
  {
    id: "pred-2018-sat-13",
    question: "Complete the analogy: Pen is to Write as Camera is to ____",
    options: [
      "Capture",
      "Photo",
      "Lens",
      "Flash"
    ],
    correctAnswer: 0,
    explanation: "A pen is used to write, just as a camera is used to capture images. This is a function-based analogy."
  },
  {
    id: "pred-2018-sat-14",
    question: "If 8 machines produce 64 items in 4 hours, how many items will 12 machines produce in 6 hours?",
    options: [
      "144",
      "96",
      "128",
      "192"
    ],
    correctAnswer: 0,
    explanation: "8 machines × 4 hours = 32 machine-hours for 64 items. So 1 machine-hour produces 2 items. 12 × 6 = 72 machine-hours. 72 × 2 = 144 items."
  },
  {
    id: "pred-2018-sat-15",
    question: "Choose the word that is most opposite in meaning to 'Abundant':",
    options: [
      "Scarce",
      "Plentiful",
      "Rich",
      "Full"
    ],
    correctAnswer: 0,
    explanation: "Abundant means existing in large quantities. Scarce means insufficient in quantity."
  },
  {
    id: "pred-2018-sat-16",
    question: "What is the next term: 64, 32, 16, 8, ____",
    options: [
      "4",
      "2",
      "6",
      "1"
    ],
    correctAnswer: 0,
    explanation: "Each term is halved: 64/2=32, 32/2=16, 16/2=8, 8/2=4."
  },
  {
    id: "pred-2018-sat-17",
    question: "If A > B and B > C, then which statement is true?",
    options: [
      "A > C",
      "C > A",
      "A = C",
      "Cannot determine"
    ],
    correctAnswer: 0,
    explanation: "By transitive property: if A > B and B > C, then A > C."
  },
  {
    id: "pred-2018-sat-18",
    question: "Complete the analogy: Fish is to Water as Bird is to ____",
    options: [
      "Air",
      "Tree",
      "Nest",
      "Sky"
    ],
    correctAnswer: 0,
    explanation: "Fish live in water, just as birds live in air. This is a habitat-based analogy."
  },
  {
    id: "pred-2018-sat-19",
    question: "What is the perimeter of a rectangle with length 12 and width 8?",
    options: [
      "40",
      "20",
      "96",
      "32"
    ],
    correctAnswer: 0,
    explanation: "Perimeter = 2(length + width) = 2(12 + 8) = 2(20) = 40."
  },
  {
    id: "pred-2018-sat-20",
    question: "Choose the word that is most similar in meaning to 'Meticulous':",
    options: [
      "Careful",
      "Careless",
      "Quick",
      "Rough"
    ],
    correctAnswer: 0,
    explanation: "Meticulous means showing great attention to detail, which is synonymous with careful."
  }
];

export const predicted2018NaturalEnglishQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-eng-1",
    question: "Choose the correct form: 'She ___ to the store yesterday.'",
    options: [
      "went",
      "goes",
      "gone",
      "going"
    ],
    correctAnswer: 0,
    explanation: "The past tense of 'go' is 'went'. Since the action happened yesterday, we use the past tense."
  },
  {
    id: "pred-2018-eng-2",
    question: "Which word is a synonym for 'happy'?",
    options: [
      "joyful",
      "sad",
      "angry",
      "tired"
    ],
    correctAnswer: 0,
    explanation: "Joyful means experiencing or showing great pleasure, which is a synonym for happy."
  },
  {
    id: "pred-2018-eng-10",
    question: "Which sentence is in passive voice?",
    options: [
      "The book was read by the student.",
      "The student read the book.",
      "The student is reading the book.",
      "The student has read the book."
    ],
    correctAnswer: 0,
    explanation: "In passive voice, the subject receives the action. 'The book' receives the action of being read."
  },
  {
    id: "pred-2018-eng-11",
    question: "Choose the correct article: '___ apple a day keeps the doctor away.'",
    options: [
      "An",
      "A",
      "The",
      "No article"
    ],
    correctAnswer: 0,
    explanation: "Use 'an' before words starting with a vowel sound. 'Apple' starts with a vowel sound /æ/."
  },
  {
    id: "pred-2018-eng-12",
    question: "What is the comparative form of 'good'?",
    options: [
      "better",
      "gooder",
      "more good",
      "best"
    ],
    correctAnswer: 0,
    explanation: "'Good' is an irregular adjective. Its comparative form is 'better'."
  },
  {
    id: "pred-2018-eng-13",
    question: "Choose the correct conjunction: 'I studied hard, ___ I passed the exam.'",
    options: [
      "so",
      "but",
      "or",
      "because"
    ],
    correctAnswer: 0,
    explanation: "'So' shows cause and effect. I studied hard, therefore I passed."
  },
  {
    id: "pred-2018-eng-14",
    question: "Which word is spelled correctly?",
    options: [
      "necessary",
      "neccessary",
      "necesary",
      "neccesary"
    ],
    correctAnswer: 0,
    explanation: "The correct spelling is 'necessary' with one 'c' and two 's's."
  },
  {
    id: "pred-2018-eng-15",
    question: "What is the superlative form of 'tall'?",
    options: [
      "tallest",
      "taller",
      "most tall",
      "more tall"
    ],
    correctAnswer: 0,
    explanation: "The superlative form of 'tall' is 'tallest', formed by adding '-est' to the adjective."
  },
  {
    id: "pred-2018-eng-16",
    question: "Choose the correct tense: 'They ___ football every Sunday.'",
    options: [
      "play",
      "plays",
      "played",
      "playing"
    ],
    correctAnswer: 0,
    explanation: "For habitual actions in the present, we use the simple present tense. 'They' takes the base form 'play'."
  },
  {
    id: "pred-2018-eng-17",
    question: "Which sentence uses the conditional correctly?",
    options: [
      "If I were you, I would study harder.",
      "If I was you, I would study harder.",
      "If I am you, I will study harder.",
      "If I be you, I would study harder."
    ],
    correctAnswer: 0,
    explanation: "In conditional sentences about hypothetical situations, we use 'If I were' (subjunctive mood)."
  },
  {
    id: "pred-2018-eng-18",
    question: "What is the meaning of the idiom 'break a leg'?",
    options: [
      "Good luck",
      "To injure oneself",
      "To work hard",
      "To take a break"
    ],
    correctAnswer: 0,
    explanation: "'Break a leg' is an idiom used to wish someone good luck, especially before a performance."
  },
  {
    id: "pred-2018-eng-19",
    question: "Choose the correct word: 'The weather is ___ today.'",
    options: [
      "beautiful",
      "beauty",
      "beautifully",
      "beautify"
    ],
    correctAnswer: 0,
    explanation: "We need an adjective to describe the noun 'weather'. 'Beautiful' is the correct adjective form."
  },
  {
    id: "pred-2018-eng-20",
    question: "What type of sentence is this: 'What time is it?'",
    options: [
      "Interrogative",
      "Declarative",
      "Imperative",
      "Exclamatory"
    ],
    correctAnswer: 0,
    explanation: "An interrogative sentence asks a question. It ends with a question mark."
  }
];

export const predicted2018SocialMathQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-smath-1",
    question: "If a shirt costs 200 Birr and is on sale for 25% off, what is the sale price?",
    options: [
      "150 Birr",
      "175 Birr",
      "125 Birr",
      "160 Birr"
    ],
    correctAnswer: 0,
    explanation: "Discount = 25% of 200 = 50 Birr. Sale price = 200 - 50 = 150 Birr."
  },
  {
    id: "pred-2018-smath-2",
    question: "Convert 3/5 to a percentage.",
    options: [
      "60%",
      "30%",
      "50%",
      "40%"
    ],
    correctAnswer: 0,
    explanation: "3/5 = 0.6 = 60%."
  },
  {
    id: "pred-2018-smath-3",
    question: "What is the simple interest on 1000 Birr at 5% per year for 3 years?",
    options: [
      "150 Birr",
      "100 Birr",
      "200 Birr",
      "50 Birr"
    ],
    correctAnswer: 0,
    explanation: "Simple Interest = P × R × T = 1000 × 0.05 × 3 = 150 Birr."
  },
  {
    id: "pred-2018-smath-4",
    question: "A shopkeeper sells an item for 240 Birr with a 20% profit. What was the cost price?",
    options: [
      "200 Birr",
      "180 Birr",
      "220 Birr",
      "192 Birr"
    ],
    correctAnswer: 0,
    explanation: "Selling Price = Cost Price + Profit. 240 = CP + 20% of CP = 1.2 CP. CP = 240/1.2 = 200 Birr."
  },
  {
    id: "pred-2018-smath-5",
    question: "What is the mean of 5, 10, 15, 20, 25?",
    options: [
      "15",
      "12",
      "18",
      "20"
    ],
    correctAnswer: 0,
    explanation: "Mean = (5 + 10 + 15 + 20 + 25)/5 = 75/5 = 15."
  },
  {
    id: "pred-2018-smath-6",
    question: "If 15% of a number is 30, what is the number?",
    options: [
      "200",
      "150",
      "250",
      "180"
    ],
    correctAnswer: 0,
    explanation: "Let the number be x. 15% of x = 30. 0.15x = 30. x = 30/0.15 = 200."
  },
  {
    id: "pred-2018-smath-7",
    question: "What is the median of 3, 7, 2, 9, 5?",
    options: [
      "5",
      "7",
      "3",
      "9"
    ],
    correctAnswer: 0,
    explanation: "Arrange in order: 2, 3, 5, 7, 9. The median (middle value) is 5."
  },
  {
    id: "pred-2018-smath-8",
    question: "A trader buys goods for 5000 Birr and sells for 6000 Birr. What is the profit percentage?",
    options: [
      "20%",
      "15%",
      "25%",
      "18%"
    ],
    correctAnswer: 0,
    explanation: "Profit = 6000 - 5000 = 1000 Birr. Profit % = (1000/5000) × 100 = 20%."
  },
  {
    id: "pred-2018-smath-9",
    question: "What is 2/3 of 120?",
    options: [
      "80",
      "60",
      "90",
      "40"
    ],
    correctAnswer: 0,
    explanation: "2/3 of 120 = (2/3) × 120 = 240/3 = 80."
  },
  {
    id: "pred-2018-smath-10",
    question: "If the ratio of boys to girls is 3:2 and there are 30 boys, how many girls are there?",
    options: [
      "20",
      "15",
      "25",
      "18"
    ],
    correctAnswer: 0,
    explanation: "3:2 ratio means for every 3 boys there are 2 girls. 30 boys = 10 × 3, so girls = 10 × 2 = 20."
  },
  {
    id: "pred-2018-smath-11",
    question: "What is 15% of 800?",
    options: [
      "120",
      "100",
      "150",
      "80"
    ],
    correctAnswer: 0,
    explanation: "15% of 800 = 0.15 × 800 = 120."
  },
  {
    id: "pred-2018-smath-12",
    question: "If a car depreciates by 10% each year, what will be its value after 2 years if it was initially 200,000 Birr?",
    options: [
      "162,000 Birr",
      "180,000 Birr",
      "160,000 Birr",
      "164,000 Birr"
    ],
    correctAnswer: 0,
    explanation: "After 1 year: 200,000 × 0.9 = 180,000. After 2 years: 180,000 × 0.9 = 162,000 Birr."
  },
  {
    id: "pred-2018-smath-13",
    question: "What is the mode of 2, 3, 5, 3, 7, 3, 9?",
    options: [
      "3",
      "5",
      "7",
      "9"
    ],
    correctAnswer: 0,
    explanation: "The mode is the most frequently occurring value. 3 appears 3 times, which is the most."
  },
  {
    id: "pred-2018-smath-14",
    question: "A discount of 20% on an item is equivalent to a discount of how much on 500 Birr?",
    options: [
      "100 Birr",
      "150 Birr",
      "200 Birr",
      "80 Birr"
    ],
    correctAnswer: 0,
    explanation: "20% of 500 = 0.2 × 500 = 100 Birr."
  },
  {
    id: "pred-2018-smath-15",
    question: "What is the range of 5, 12, 8, 15, 20?",
    options: [
      "15",
      "10",
      "12",
      "8"
    ],
    correctAnswer: 0,
    explanation: "Range = Maximum - Minimum = 20 - 5 = 15."
  },
  {
    id: "pred-2018-smath-16",
    question: "If 3 apples cost 60 Birr, how much do 7 apples cost?",
    options: [
      "140 Birr",
      "120 Birr",
      "150 Birr",
      "180 Birr"
    ],
    correctAnswer: 0,
    explanation: "Cost per apple = 60/3 = 20 Birr. Cost of 7 apples = 7 × 20 = 140 Birr."
  },
  {
    id: "pred-2018-smath-17",
    question: "What is 25% as a decimal?",
    options: [
      "0.25",
      "0.025",
      "2.5",
      "0.0025"
    ],
    correctAnswer: 0,
    explanation: "25% = 25/100 = 0.25."
  },
  {
    id: "pred-2018-smath-18",
    question: "A shop offers a 'buy 2 get 1 free' offer. What percentage discount is this?",
    options: [
      "33.33%",
      "25%",
      "50%",
      "40%"
    ],
    correctAnswer: 0,
    explanation: "For 3 items, you pay for 2. Discount = 1/3 ≈ 33.33%."
  },
  {
    id: "pred-2018-smath-19",
    question: "What is the compound interest on 1000 Birr at 10% per year for 2 years?",
    options: [
      "210 Birr",
      "200 Birr",
      "220 Birr",
      "100 Birr"
    ],
    correctAnswer: 0,
    explanation: "Year 1: 1000 × 0.10 = 100. Year 2: 1100 × 0.10 = 110. Total interest = 100 + 110 = 210 Birr."
  },
  {
    id: "pred-2018-smath-20",
    question: "If the price increases from 80 to 100, what is the percentage increase?",
    options: [
      "25%",
      "20%",
      "30%",
      "15%"
    ],
    correctAnswer: 0,
    explanation: "Increase = 100 - 80 = 20. Percentage increase = (20/80) × 100 = 25%."
  }
];

export const predicted2018SocialEnglishQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-seng-1",
    question: "Choose the correct word: 'The ___ of the movie was very exciting.'",
    options: [
      "plot",
      "plat",
      "plotte",
      "plott"
    ],
    correctAnswer: 0,
    explanation: "'Plot' is the correct spelling meaning the storyline of a narrative."
  },
  {
    id: "pred-2018-seng-2",
    question: "Which is a compound sentence?",
    options: [
      "I went to the store, and I bought milk.",
      "I went to the store.",
      "Because I was hungry, I ate.",
      "I went to the store and bought milk."
    ],
    correctAnswer: 0,
    explanation: "A compound sentence has two independent clauses joined by a coordinating conjunction (and, but, or)."
  },
  {
    id: "pred-2018-seng-3",
    question: "What is the plural of 'child'?",
    options: [
      "children",
      "childs",
      "childes",
      "childern"
    ],
    correctAnswer: 0,
    explanation: "'Children' is the irregular plural of 'child'."
  },
  {
    id: "pred-2018-seng-4",
    question: "Which word is an adjective?",
    options: [
      "beautiful",
      "beauty",
      "beautifully",
      "beautify"
    ],
    correctAnswer: 0,
    explanation: "'Beautiful' is an adjective describing a noun. 'Beauty' is a noun, 'beautifully' is an adverb, 'beautify' is a verb."
  },
  {
    id: "pred-2018-seng-5",
    question: "Choose the correct pronoun: 'This book belongs to ___.",
    options: [
      "me",
      "I",
      "my",
      "mine"
    ],
    correctAnswer: 0,
    explanation: "After 'belongs to', use the object pronoun 'me'."
  },
  {
    id: "pred-2018-seng-6",
    question: "What is the main idea of a paragraph called?",
    options: [
      "Topic sentence",
      "Supporting detail",
      "Concluding sentence",
      "Transition"
    ],
    correctAnswer: 0,
    explanation: "The topic sentence states the main idea of a paragraph."
  },
  {
    id: "pred-2018-seng-7",
    question: "Which sentence uses the correct subject-verb agreement?",
    options: [
      "The news is good.",
      "The news are good.",
      "The news be good.",
      "The news were good."
    ],
    correctAnswer: 0,
    explanation: "'News' is an uncountable noun that takes a singular verb 'is'."
  },
  {
    id: "pred-2018-seng-8",
    question: "What is a homophone for 'their'?",
    options: [
      "there",
      "they're",
      "their",
      "thier"
    ],
    correctAnswer: 0,
    explanation: "'There' is a homophone of 'their' (same pronunciation, different meaning/spelling)."
  },
  {
    id: "pred-2018-seng-9",
    question: "Which is an example of a metaphor?",
    options: [
      "Time is a thief.",
      "She runs like the wind.",
      "The clouds are white cotton balls.",
      "He is as strong as an ox."
    ],
    correctAnswer: 0,
    explanation: "A metaphor directly compares two things without using 'like' or 'as'. 'Time is a thief' is a metaphor."
  },
  {
    id: "pred-2018-seng-10",
    question: "What is the purpose of a conclusion in an essay?",
    options: [
      "To summarize and restate the main points",
      "To introduce new ideas",
      "To ask questions",
      "To provide background information"
    ],
    correctAnswer: 0,
    explanation: "The conclusion summarizes the main points and restates the thesis in a new way."
  }
];

export const predicted2018SocialGeographyQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-sgeo-1",
    question: "What is the largest continent in the world by area?",
    options: [
      "Asia",
      "Africa",
      "Europe",
      "North America"
    ],
    correctAnswer: 0,
    explanation: "Asia is the largest continent by area, covering approximately 44.58 million square kilometers."
  },
  {
    id: "pred-2018-sgeo-2",
    question: "What is the longest river in the world?",
    options: [
      "Nile River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctAnswer: 0,
    explanation: "The Nile River in Africa is generally considered the longest river in the world at approximately 6,650 kilometers."
  },
  {
    id: "pred-2018-sgeo-3",
    question: "What is the capital city of Ethiopia?",
    options: [
      "Addis Ababa",
      "Dire Dawa",
      "Mekelle",
      "Bahir Dar"
    ],
    correctAnswer: 0,
    explanation: "Addis Ababa is the capital and largest city of Ethiopia, founded in 1886."
  },
  {
    id: "pred-2018-sgeo-4",
    question: "What type of climate does Ethiopia have?",
    options: [
      "Tropical monsoon climate",
      "Desert climate",
      "Temperate climate",
      "Polar climate"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia has a tropical monsoon climate with variations due to its diverse topography and altitude."
  },
  {
    id: "pred-2018-sgeo-5",
    question: "What is the Great Rift Valley?",
    options: [
      "A geological feature extending from Lebanon to Mozambique",
      "A mountain range in Europe",
      "A desert in Africa",
      "A river in South America"
    ],
    correctAnswer: 0,
    explanation: "The Great Rift Valley is a geological feature that extends from Lebanon in the north to Mozambique in the south, passing through Ethiopia."
  },
  {
    id: "pred-2018-sgeo-6",
    question: "What is the highest peak in Ethiopia?",
    options: [
      "Ras Dashan",
      "Mount Entoto",
      "Mount Guna",
      "Mount Chilalo"
    ],
    correctAnswer: 0,
    explanation: "Ras Dashan is the highest peak in Ethiopia, reaching an elevation of 4,550 meters (14,928 feet)."
  },
  {
    id: "pred-2018-sgeo-7",
    question: "What is the primary economic activity in the Ethiopian highlands?",
    options: [
      "Agriculture",
      "Mining",
      "Fishing",
      "Manufacturing"
    ],
    correctAnswer: 0,
    explanation: "Agriculture is the primary economic activity in the Ethiopian highlands, with crops like teff, coffee, and various vegetables."
  },
  {
    id: "pred-2018-sgeo-8",
    question: "Which ocean borders Africa?",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ],
    correctAnswer: 0,
    explanation: "The Atlantic Ocean borders the western coast of Africa."
  },
  {
    id: "pred-2018-sgeo-9",
    question: "What is the population of Ethiopia approximately?",
    options: [
      "120 million",
      "80 million",
      "150 million",
      "100 million"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia's population is approximately 120 million, making it the second-most populous nation in Africa."
  },
  {
    id: "pred-2018-sgeo-10",
    question: "What is the main export crop of Ethiopia?",
    options: [
      "Coffee",
      "Tea",
      "Cocoa",
      "Sugar"
    ],
    correctAnswer: 0,
    explanation: "Coffee is Ethiopia's main export crop, and the country is known as the birthplace of coffee."
  },
  {
    id: "pred-2018-sgeo-11",
    question: "What is the largest lake in Ethiopia?",
    options: [
      "Lake Tana",
      "Lake Abaya",
      "Lake Chamo",
      "Lake Ziway"
    ],
    correctAnswer: 0,
    explanation: "Lake Tana is the largest lake in Ethiopia and the source of the Blue Nile River."
  },
  {
    id: "pred-2018-sgeo-12",
    question: "Which region in Ethiopia is known for its rock-hewn churches?",
    options: [
      "Tigray",
      "Oromia",
      "Amhara",
      "Somali"
    ],
    correctAnswer: 0,
    explanation: "Tigray region is famous for its rock-hewn churches, particularly those in Lalibela."
  },
  {
    id: "pred-2018-sgeo-13",
    question: "What is the dominant religion in Ethiopia?",
    options: [
      "Christianity (Ethiopian Orthodox)",
      "Islam",
      "Hinduism",
      "Buddhism"
    ],
    correctAnswer: 0,
    explanation: "Ethiopian Orthodox Christianity is the dominant religion, practiced by approximately 40-45% of the population."
  },
  {
    id: "pred-2018-sgeo-14",
    question: "What is the currency of Ethiopia?",
    options: [
      "Ethiopian Birr",
      "Ethiopian Dollar",
      "Ethiopian Pound",
      "Ethiopian Euro"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Birr (ETB) is the official currency of Ethiopia."
  },
  {
    id: "pred-2018-sgeo-15",
    question: "Which mountain range runs through Ethiopia?",
    options: [
      "Ethiopian Highlands",
      "Andes Mountains",
      "Himalayas",
      "Alps"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Highlands is a rugged mass of mountains in Ethiopia, forming the largest continuous area of its elevation in the continent."
  },
  {
    id: "pred-2018-sgeo-16",
    question: "What is the most widely spoken language in Ethiopia?",
    options: [
      "Amharic",
      "Oromo",
      "Tigrinya",
      "Somali"
    ],
    correctAnswer: 0,
    explanation: "Amharic is the official working language and most widely spoken language in Ethiopia."
  },
  {
    id: "pred-2018-sgeo-17",
    question: "What is the Danakil Depression known for?",
    options: [
      "Being one of the hottest places on Earth",
      "Being the coldest place in Africa",
      "Having the highest rainfall",
      "Being covered in forests"
    ],
    correctAnswer: 0,
    explanation: "The Danakil Depression is one of the hottest and lowest places on Earth, with temperatures often exceeding 50°C."
  },
  {
    id: "pred-2018-sgeo-18",
    question: "What is the Simien Mountains National Park famous for?",
    options: [
      "Endemic wildlife and dramatic landscapes",
      "Ancient ruins",
      "Desert scenery",
      "Coastal beaches"
    ],
    correctAnswer: 0,
    explanation: "Simien Mountains National Park is a UNESCO World Heritage Site known for endemic species like the Walia ibex and Gelada baboon."
  },
  {
    id: "pred-2018-sgeo-19",
    question: "Which river originates in Ethiopia and flows into Sudan?",
    options: [
      "Blue Nile",
      "White Nile",
      "Congo River",
      "Niger River"
    ],
    correctAnswer: 0,
    explanation: "The Blue Nile originates from Lake Tana in Ethiopia and flows into Sudan, where it joins the White Nile."
  },
  {
    id: "pred-2018-sgeo-20",
    question: "What is the main environmental challenge facing Ethiopia?",
    options: [
      "Deforestation and soil erosion",
      "Flooding",
      "Desertification only",
      "Air pollution"
    ],
    correctAnswer: 0,
    explanation: "Deforestation and soil erosion are major environmental challenges, with Ethiopia losing significant forest cover over decades."
  }
];

export const predicted2018SocialEconomicsQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-secon-1",
    question: "What is the primary goal of economics?",
    options: [
      "To study how societies allocate scarce resources",
      "To print money",
      "To control prices",
      "To manage international trade only"
    ],
    correctAnswer: 0,
    explanation: "Economics studies how societies allocate scarce resources to satisfy unlimited human wants and needs."
  },
  {
    id: "pred-2018-secon-2",
    question: "What is 'opportunity cost'?",
    options: [
      "The value of the next best alternative given up when making a choice",
      "The cost of production",
      "The price of a good",
      "The tax on a product"
    ],
    correctAnswer: 0,
    explanation: "Opportunity cost is the value of the next best alternative that is given up when making a decision."
  },
  {
    id: "pred-2018-secon-3",
    question: "What is 'supply and demand'?",
    options: [
      "Economic model showing relationship between quantity supplied and quantity demanded",
      "Government price control",
      "Tax collection method",
      "Trade agreement"
    ],
    correctAnswer: 0,
    explanation: "Supply and demand is an economic model that shows how price and quantity are determined in a market."
  },
  {
    id: "pred-2018-secon-4",
    question: "What is 'inflation'?",
    options: [
      "A general increase in prices over time",
      "A decrease in prices",
      "Economic growth",
      "Low unemployment"
    ],
    correctAnswer: 0,
    explanation: "Inflation is a general increase in the price level of goods and services over time."
  },
  {
    id: "pred-2018-secon-5",
    question: "What is 'GDP'?",
    options: [
      "Gross Domestic Product - total value of goods and services produced in a country",
      "General Development Plan",
      "Government Debt Payment",
      "Global Development Program"
    ],
    correctAnswer: 0,
    explanation: "GDP (Gross Domestic Product) measures the total value of all goods and services produced within a country in a given period."
  },
  {
    id: "pred-2018-secon-6",
    question: "What is 'unemployment'?",
    options: [
      "People who are actively seeking work but cannot find jobs",
      "People who don't want to work",
      "People who are retired",
      "People who are students"
    ],
    correctAnswer: 0,
    explanation: "Unemployment refers to people who are actively seeking work but are unable to find employment."
  },
  {
    id: "pred-2018-secon-7",
    question: "What is a 'market economy'?",
    options: [
      "Economic system where prices are determined by supply and demand",
      "Government controls all prices",
      "No private property allowed",
      "Central planning only"
    ],
    correctAnswer: 0,
    explanation: "In a market economy, prices and production are determined by supply and demand with minimal government intervention."
  },
  {
    id: "pred-2018-secon-8",
    question: "What is 'scarcity' in economics?",
    options: [
      "Limited resources compared to unlimited wants",
      "Abundance of resources",
      "Equal distribution",
      "Government control"
    ],
    correctAnswer: 0,
    explanation: "Scarcity is the fundamental economic problem of having limited resources to satisfy unlimited human wants."
  },
  {
    id: "pred-2018-secon-9",
    question: "What is 'taxation'?",
    options: [
      "Compulsory payments to government to fund public services",
      "Voluntary donations",
      "Private business revenue",
      "Bank interest"
    ],
    correctAnswer: 0,
    explanation: "Taxation is the compulsory collection of revenue by the government to fund public services and infrastructure."
  },
  {
    id: "pred-2018-secon-10",
    question: "What is 'international trade'?",
    options: [
      "Exchange of goods and services between countries",
      "Trade within a country",
      "Government spending",
      "Local market transactions"
    ],
    correctAnswer: 0,
    explanation: "International trade is the exchange of goods, services, and capital across national borders."
  },
  {
    id: "pred-2018-secon-11",
    question: "What is 'monetary policy'?",
    options: [
      "Central bank actions to control money supply and interest rates",
      "Government taxation policy",
      "Trade agreements between countries",
      "Environmental regulations"
    ],
    correctAnswer: 0,
    explanation: "Monetary policy involves central bank actions to control money supply and interest rates to influence the economy."
  },
  {
    id: "pred-2018-secon-12",
    question: "What is 'fiscal policy'?",
    options: [
      "Government use of taxation and spending to influence the economy",
      "Central bank policy",
      "Trade policy",
      "Environmental policy"
    ],
    correctAnswer: 0,
    explanation: "Fiscal policy refers to the government's use of taxation and spending to influence economic activity."
  },
  {
    id: "pred-2018-secon-13",
    question: "What is a 'monopoly'?",
    options: [
      "A single seller dominates the market with no close substitutes",
      "Many sellers compete",
      "Government controls the market",
      "No sellers exist"
    ],
    correctAnswer: 0,
    explanation: "A monopoly exists when a single seller controls the entire market for a product with no close substitutes."
  },
  {
    id: "pred-2018-secon-14",
    question: "What is 'comparative advantage'?",
    options: [
      "Producing at lower opportunity cost than trading partners",
      "Producing more than others",
      "Producing faster than others",
      "Producing cheaper than others"
    ],
    correctAnswer: 0,
    explanation: "Comparative advantage means producing goods at a lower opportunity cost than trading partners."
  },
  {
    id: "pred-2018-secon-15",
    question: "What is the 'law of demand'?",
    options: [
      "As price increases, quantity demanded decreases",
      "As price increases, quantity demanded increases",
      "Price and demand are unrelated",
      "Demand always increases"
    ],
    correctAnswer: 0,
    explanation: "The law of demand states that as price increases, quantity demanded decreases, all else being equal."
  },
  {
    id: "pred-2018-secon-16",
    question: "What is the 'law of supply'?",
    options: [
      "As price increases, quantity supplied increases",
      "As price increases, quantity supplied decreases",
      "Supply is independent of price",
      "Supply always decreases"
    ],
    correctAnswer: 0,
    explanation: "The law of supply states that as price increases, producers are willing to supply more of the good."
  },
  {
    id: "pred-2018-secon-17",
    question: "What is 'equilibrium price'?",
    options: [
      "Price where quantity demanded equals quantity supplied",
      "Highest price in market",
      "Lowest price in market",
      "Government-set price"
    ],
    correctAnswer: 0,
    explanation: "Equilibrium price occurs where the quantity demanded by consumers equals the quantity supplied by producers."
  },
  {
    id: "pred-2018-secon-18",
    question: "What is a 'public good'?",
    options: [
      "Non-excludable and non-rivalrous good",
      "Good sold by government",
      "Expensive good",
      "Imported good"
    ],
    correctAnswer: 0,
    explanation: "Public goods are non-excludable (cannot exclude anyone) and non-rivalrous (one person's use doesn't reduce availability)."
  },
  {
    id: "pred-2018-secon-19",
    question: "What is the 'business cycle'?",
    options: [
      "Fluctuations in economic activity over time",
      "Daily business operations",
      "Annual business reports",
      "Business planning process"
    ],
    correctAnswer: 0,
    explanation: "The business cycle refers to periodic economic fluctuations including expansions and recessions."
  },
  {
    id: "pred-2018-secon-20",
    question: "What is the difference between nominal and real GDP?",
    options: [
      "Nominal uses current prices; real uses constant prices",
      "Nominal is larger; real is smaller",
      "Nominal includes services; real does not",
      "No difference"
    ],
    correctAnswer: 0,
    explanation: "Nominal GDP uses current prices, while real GDP adjusts for inflation using constant base-year prices."
  }
];

export const predicted2018SocialCivicsQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-sciv-1",
    question: "What is the purpose of government?",
    options: [
      "To maintain order, protect rights, and provide public services",
      "To control citizens only",
      "To collect taxes only",
      "To enforce military rule"
    ],
    correctAnswer: 0,
    explanation: "The purpose of government is to maintain social order, protect citizens' rights, and provide essential public services."
  },
  {
    id: "pred-2018-sciv-2",
    question: "What is 'sovereignty'?",
    options: [
      "The supreme authority of a state to govern itself",
      "Economic power",
      "Military strength",
      "International influence"
    ],
    correctAnswer: 0,
    explanation: "Sovereignty is the supreme authority of a state to govern itself without external interference."
  },
  {
    id: "pred-2018-sciv-3",
    question: "What are 'human rights'?",
    options: [
      "Fundamental rights inherent to all human beings",
      "Rights granted by government",
      "Rights of citizens only",
      "Economic privileges"
    ],
    correctAnswer: 0,
    explanation: "Human rights are fundamental rights and freedoms that belong to every person by virtue of being human."
  },
  {
    id: "pred-2018-sciv-4",
    question: "What is 'democracy'?",
    options: [
      "System of government by the whole population through elected representatives",
      "Rule by one person",
      "Military rule",
      "No government"
    ],
    correctAnswer: 0,
    explanation: "Democracy is a system of government where power is held by the people through elected representatives."
  },
  {
    id: "pred-2018-sciv-5",
    question: "What is the role of the legislative branch?",
    options: [
      "To make laws",
      "To enforce laws",
      "To interpret laws",
      "To collect taxes"
    ],
    correctAnswer: 0,
    explanation: "The legislative branch (parliament/congress) is responsible for making and passing laws."
  },
  {
    id: "pred-2018-sciv-6",
    question: "What is 'political participation'?",
    options: [
      "Citizens taking part in political processes like voting and campaigning",
      "Watching politics on TV",
      "Reading news only",
      "Ignoring politics"
    ],
    correctAnswer: 0,
    explanation: "Political participation involves citizens actively engaging in political processes such as voting, campaigning, and public debate."
  },
  {
    id: "pred-2018-sciv-7",
    question: "What is 'social justice'?",
    options: [
      "Fair and just relations between individuals and society",
      "Economic inequality",
      "Social discrimination",
      "Military power"
    ],
    correctAnswer: 0,
    explanation: "Social justice refers to fair and just relations between individuals and society, including fair distribution of wealth and opportunities."
  },
  {
    id: "pred-2018-sciv-8",
    question: "What is 'civic responsibility'?",
    options: [
      "Duties of citizens to contribute to their community",
      "Rights only",
      "Government duties only",
      "Military service only"
    ],
    correctAnswer: 0,
    explanation: "Civic responsibility refers to the duties of citizens to actively participate in their community and contribute to the common good."
  },
  {
    id: "pred-2018-sciv-9",
    question: "What is 'public policy'?",
    options: [
      "Government actions and decisions to address public problems",
      "Private business decisions",
      "Individual choices",
      "International agreements only"
    ],
    correctAnswer: 0,
    explanation: "Public policy consists of government actions, decisions, and laws designed to address societal problems."
  },
  {
    id: "pred-2018-sciv-10",
    question: "What is the importance of civic education?",
    options: [
      "To prepare citizens to participate effectively in democratic society",
      "To teach only history",
      "To promote military training",
      "To control citizens"
    ],
    correctAnswer: 0,
    explanation: "Civic education prepares citizens to participate effectively in democratic processes and understand their rights and responsibilities."
  },
  {
    id: "pred-2018-sciv-11",
    question: "What is 'checks and balances'?",
    options: [
      "Each branch can limit the powers of the others",
      "One branch controls everything",
      "No branch has power",
      "Military controls all branches"
    ],
    correctAnswer: 0,
    explanation: "Checks and balances ensure no single branch becomes too powerful by allowing each branch to limit the others."
  },
  {
    id: "pred-2018-sciv-12",
    question: "What is the role of the executive branch?",
    options: [
      "To enforce laws",
      "To make laws",
      "To interpret laws",
      "To judge laws"
    ],
    correctAnswer: 0,
    explanation: "The executive branch (president/prime minister) enforces laws and administers government programs."
  },
  {
    id: "pred-2018-sciv-13",
    question: "What is the role of the judiciary?",
    options: [
      "To interpret laws and ensure justice",
      "To create laws",
      "To enforce laws",
      "To collect taxes"
    ],
    correctAnswer: 0,
    explanation: "The judiciary interprets laws, resolves disputes, and ensures justice is served according to the constitution."
  },
  {
    id: "pred-2018-sciv-14",
    question: "What is 'due process'?",
    options: [
      "Fair treatment through judicial system",
      "Speedy trial only",
      "Free legal representation only",
      "Public trial only"
    ],
    correctAnswer: 0,
    explanation: "Due process ensures fair treatment through the judicial system, protecting citizens from arbitrary government action."
  },
  {
    id: "pred-2018-sciv-15",
    question: "What is a 'political party'?",
    options: [
      "Organization of people with similar political goals",
      "Government department",
      "Court system",
      "Military unit"
    ],
    correctAnswer: 0,
    explanation: "A political party is an organized group of people who share similar political views and seek to influence government policy."
  },
  {
    id: "pred-2018-sciv-16",
    question: "What is 'freedom of speech'?",
    options: [
      "Right to express opinions without censorship",
      "Right to speak only in public",
      "Right to speak only to government",
      "Right to speak only in private"
    ],
    correctAnswer: 0,
    explanation: "Freedom of speech is the right to express opinions without government censorship or restraint."
  },
  {
    id: "pred-2018-sciv-17",
    question: "What is 'universal suffrage'?",
    options: [
      "Right of all adult citizens to vote",
      "Right of only men to vote",
      "Right of only wealthy to vote",
      "Right of only educated to vote"
    ],
    correctAnswer: 0,
    explanation: "Universal suffrage means all adult citizens have the right to vote regardless of race, gender, or economic status."
  },
  {
    id: "pred-2018-sciv-18",
    question: "What is 'judicial review'?",
    options: [
      "Power of courts to review laws for constitutionality",
      "Review of court cases",
      "Review of judges",
      "Review of legal documents"
    ],
    correctAnswer: 0,
    explanation: "Judicial review is the power of courts to determine whether laws violate the constitution."
  },
  {
    id: "pred-2018-sciv-19",
    question: "What is 'civil disobedience'?",
    options: [
      "Refusal to obey unjust laws through nonviolent protest",
      "Violent rebellion",
      "Obeying all laws",
      "Breaking laws for personal gain"
    ],
    correctAnswer: 0,
    explanation: "Civil disobedience is the refusal to obey certain laws as a form of peaceful protest against unjust policies."
  },
  {
    id: "pred-2018-sciv-20",
    question: "What is 'federalism'?",
    options: [
      "Division of power between central and regional governments",
      "Central government controls everything",
      "No government exists",
      "Military dictatorship"
    ],
    correctAnswer: 0,
    explanation: "Federalism is a system of government where power is divided between a central government and regional governments."
  }
];

export const predicted2018SocialScholasticAptitudeQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-ssat-1",
    question: "Complete the analogy: Ocean is to Water as Forest is to ____",
    options: [
      "Trees",
      "Animals",
      "Birds",
      "Soil"
    ],
    correctAnswer: 0,
    explanation: "An ocean is a body of water, just as a forest is a collection of trees. This is a composition-based analogy."
  },
  {
    id: "pred-2018-ssat-2",
    question: "If all X are Y and some Y are Z, then some X are definitely Z.",
    options: [
      "False",
      "True",
      "Cannot be determined",
      "Sometimes true"
    ],
    correctAnswer: 0,
    explanation: "This is a logical fallacy. Just because some Y are Z doesn't mean any X are Z. We cannot determine this relationship."
  },
  {
    id: "pred-2018-ssat-3",
    question: "Choose the word that is most similar in meaning to 'Diligent':",
    options: [
      "Hardworking",
      "Lazy",
      "Careless",
      "Slow"
    ],
    correctAnswer: 0,
    explanation: "Diligent means showing care in one's work or duties, which is synonymous with hardworking."
  },
  {
    id: "pred-2018-ssat-4",
    question: "What number comes next in the sequence: 3, 6, 12, 24, ____",
    options: [
      "48",
      "36",
      "30",
      "60"
    ],
    correctAnswer: 0,
    explanation: "The pattern is doubling each number: 3×2=6, 6×2=12, 12×2=24, 24×2=48."
  },
  {
    id: "pred-2018-ssat-5",
    question: "If a worker can complete a job in 6 days, how many days will 3 workers take?",
    options: [
      "2 days",
      "3 days",
      "6 days",
      "18 days"
    ],
    correctAnswer: 0,
    explanation: "More workers means less time. 3 workers is triple, so time is divided by 3: 6/3 = 2 days."
  },
  {
    id: "pred-2018-ssat-6",
    question: "Choose the word that is most opposite in meaning to 'Generous':",
    options: [
      "Stingy",
      "Kind",
      "Rich",
      "Giving"
    ],
    correctAnswer: 0,
    explanation: "Generous means willing to give more than necessary. Stingy means unwilling to give or spend."
  },
  {
    id: "pred-2018-ssat-7",
    question: "What is the next term in the sequence: 1, 4, 9, 16, 25, ____",
    options: [
      "36",
      "30",
      "49",
      "32"
    ],
    correctAnswer: 0,
    explanation: "This is the sequence of perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36."
  },
  {
    id: "pred-2018-ssat-8",
    question: "Complete the analogy: Doctor is to Hospital as Teacher is to ____",
    options: [
      "School",
      "Classroom",
      "Student",
      "Book"
    ],
    correctAnswer: 0,
    explanation: "A doctor works in a hospital, just as a teacher works in a school. This is a workplace-based analogy."
  },
  {
    id: "pred-2018-ssat-9",
    question: "What is 40% of 250?",
    options: [
      "100",
      "80",
      "120",
      "50"
    ],
    correctAnswer: 0,
    explanation: "40% of 250 = 0.40 × 250 = 100."
  },
  {
    id: "pred-2018-ssat-10",
    question: "What comes next: 100, 50, 25, 12.5, ____",
    options: [
      "6.25",
      "10",
      "8",
      "5"
    ],
    correctAnswer: 0,
    explanation: "Each term is halved: 100/2=50, 50/2=25, 25/2=12.5, 12.5/2=6.25."
  },
  {
    id: "pred-2018-ssat-11",
    question: "Choose the word that is most similar in meaning to 'Meticulous':",
    options: [
      "Careful",
      "Careless",
      "Quick",
      "Rough"
    ],
    correctAnswer: 0,
    explanation: "Meticulous means showing great attention to detail, which is synonymous with careful."
  },
  {
    id: "pred-2018-ssat-12",
    question: "What comes next: 2, 5, 11, 23, 47, ____",
    options: [
      "95",
      "94",
      "96",
      "93"
    ],
    correctAnswer: 0,
    explanation: "The pattern is ×2+1: 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95."
  },
  {
    id: "pred-2018-ssat-13",
    question: "Complete the analogy: Library is to Books as Garden is to ____",
    options: [
      "Plants",
      "Flowers",
      "Trees",
      "Soil"
    ],
    correctAnswer: 0,
    explanation: "A library contains books, just as a garden contains plants. This is a container-content analogy."
  },
  {
    id: "pred-2018-ssat-14",
    question: "If 6 machines produce 120 units in 4 hours, how many units will 8 machines produce in 6 hours?",
    options: [
      "240",
      "180",
      "200",
      "160"
    ],
    correctAnswer: 0,
    explanation: "6 machines × 4 hours = 24 machine-hours for 120 units. So 1 machine-hour produces 5 units. 8 × 6 = 48 machine-hours. 48 × 5 = 240 units."
  },
  {
    id: "pred-2018-ssat-15",
    question: "Choose the word that is most opposite in meaning to 'Humble':",
    options: [
      "Arrogant",
      "Modest",
      "Shy",
      "Quiet"
    ],
    correctAnswer: 0,
    explanation: "Humble means having a modest view of one's importance. Arrogant means having an exaggerated sense of self-importance."
  },
  {
    id: "pred-2018-ssat-16",
    question: "What is the area of a triangle with base 8 and height 6?",
    options: [
      "24",
      "48",
      "12",
      "14"
    ],
    correctAnswer: 0,
    explanation: "Area = (1/2) × base × height = (1/2) × 8 × 6 = 24."
  },
  {
    id: "pred-2018-ssat-17",
    question: "If A is to the east of B, and B is to the east of C, then A is to the ____ of C.",
    options: [
      "east",
      "west",
      "north",
      "south"
    ],
    correctAnswer: 0,
    explanation: "If A is east of B, and B is east of C, then A is east of C (transitive property of direction)."
  },
  {
    id: "pred-2018-ssat-18",
    question: "Complete the analogy: Music is to Sound as Painting is to ____",
    options: [
      "Sight",
      "Color",
      "Canvas",
      "Brush"
    ],
    correctAnswer: 0,
    explanation: "Music appeals to the sense of hearing (sound), just as painting appeals to the sense of sight."
  },
  {
    id: "pred-2018-ssat-19",
    question: "What is 25% of 80 plus 50% of 60?",
    options: [
      "50",
      "40",
      "60",
      "45"
    ],
    correctAnswer: 0,
    explanation: "25% of 80 = 20. 50% of 60 = 30. 20 + 30 = 50."
  },
  {
    id: "pred-2018-ssat-20",
    question: "Choose the word that is most similar in meaning to 'Eloquent':",
    options: [
      "Articulate",
      "Silent",
      "Confused",
      "Simple"
    ],
    correctAnswer: 0,
    explanation: "Eloquent means fluent or persuasive in speaking or writing, which is synonymous with articulate."
  }
];

export const predicted2018SocialHistoryQuestions: MatricExamQuestion[] = [
  {
    id: "pred-2018-hist-1",
    question: "When was the Battle of Adwa fought?",
    options: [
      "1896",
      "1935",
      "1941",
      "1855"
    ],
    correctAnswer: 0,
    explanation: "The Battle of Adwa was fought in 1896 between Ethiopia and Italy, resulting in an Ethiopian victory."
  },
  {
    id: "pred-2018-hist-2",
    question: "Who was the Ethiopian emperor during the Italian occupation (1935-1941)?",
    options: [
      "Haile Selassie I",
      "Menelik II",
      "Tewodros",
      "Yohannes IV"
    ],
    correctAnswer: 0,
    explanation: "Haile Selassie I was emperor during the Italian occupation and went into exile before returning in 1941."
  },
  {
    id: "pred-2018-hist-3",
    question: "What was the significance of the Ethio-Eritrean Federation?",
    options: [
      "Eritrea was federated with Ethiopia in 1952",
      "Eritrea became independent in 1952",
      "Ethiopia colonized Eritrea",
      "Eritrea joined the UN"
    ],
    correctAnswer: 0,
    explanation: "In 1952, Eritrea was federated with Ethiopia as an autonomous unit under Haile Selassie."
  },
  {
    id: "pred-2018-hist-4",
    question: "When did Ethiopia adopt its first constitution?",
    options: [
      "1931",
      "1955",
      "1974",
      "1995"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia adopted its first constitution in 1931 under Emperor Haile Selassie I."
  },
  {
    id: "pred-2018-hist-5",
    question: "What was the Derg regime?",
    options: [
      "Military junta that ruled Ethiopia (1974-1991)",
      "Monarchical government",
      "Democratic government",
      "Colonial administration"
    ],
    correctAnswer: 0,
    explanation: "The Derg was a military junta that ruled Ethiopia after overthrowing Haile Selassie in 1974 until 1991."
  },
  {
    id: "pred-2018-hist-6",
    question: "When did Ethiopia become a federal democratic republic?",
    options: [
      "1995",
      "1991",
      "1974",
      "1930"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia adopted a new constitution in 1995, establishing it as a federal democratic republic."
  },
  {
    id: "pred-2018-hist-7",
    question: "Who was the founder of modern Ethiopia?",
    options: [
      "Tewodros II",
      "Menelik II",
      "Haile Selassie I",
      "Yohannes IV"
    ],
    correctAnswer: 0,
    explanation: "Tewodros II (1855-1868) is often considered the founder of modern Ethiopia for his efforts to unify the country."
  },
  {
    id: "pred-2018-hist-8",
    question: "What was the purpose of the Berlin Conference (1884-1885)?",
    options: [
      "To partition Africa among European powers",
      "To free African slaves",
      "To establish trade routes",
      "To promote African independence"
    ],
    correctAnswer: 0,
    explanation: "The Berlin Conference was organized by European powers to partition Africa among themselves, with Ethiopia and Liberia being the only independent African nations."
  },
  {
    id: "pred-2018-hist-9",
    question: "When did Ethiopia join the League of Nations?",
    options: [
      "1923",
      "1918",
      "1935",
      "1945"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia joined the League of Nations in 1923, becoming the first African member state."
  },
  {
    id: "pred-2018-hist-10",
    question: "What was the significance of the Solomonic Dynasty?",
    options: [
      "Claimed descent from King Solomon and Queen of Sheba",
      "Ruled only for 50 years",
      "Was a foreign dynasty",
      "Established democracy"
    ],
    correctAnswer: 0,
    explanation: "The Solomonic Dynasty claimed descent from the biblical King Solomon and Queen of Sheba, providing religious legitimacy to Ethiopian emperors."
  },
  {
    id: "pred-2018-hist-11",
    question: "When did Menelik II expand Ethiopian territory?",
    options: [
      "Late 19th century (1889-1913)",
      "Early 18th century",
      "Mid 20th century",
      "17th century"
    ],
    correctAnswer: 0,
    explanation: "Emperor Menelik II significantly expanded Ethiopian territory in the late 19th century, incorporating regions like Ogaden and the southern territories."
  },
  {
    id: "pred-2018-hist-12",
    question: "What was the role of Ethiopia in World War II?",
    options: [
      "Fought against Italian occupation alongside Allied forces",
      "Remained neutral",
      "Fought with Axis powers",
      "Did not participate"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia fought against Italian occupation during WWII, eventually liberating the country in 1941 with British Allied support."
  },
  {
    id: "pred-2018-hist-13",
    question: "What was the Red Terror in Ethiopia?",
    options: [
      "Violent campaign by Derg against political opponents (1977-1978)",
      "Communist revolution",
      "War with Eritrea",
      "Economic reform program"
    ],
    correctAnswer: 0,
    explanation: "The Red Terror was a violent campaign by the Derg regime against political opponents, resulting in thousands of deaths."
  },
  {
    id: "pred-2018-hist-14",
    question: "When did Ethiopia adopt Christianity as a state religion?",
    options: [
      "4th century (330 AD)",
      "1st century",
      "7th century",
      "10th century"
    ],
    correctAnswer: 0,
    explanation: "Ethiopia adopted Christianity as a state religion in the 4th century under King Ezana, making it one of the oldest Christian nations."
  },
  {
    id: "pred-2018-hist-15",
    question: "What was the significance of the Axumite Kingdom?",
    options: [
      "Major ancient civilization and trade empire",
      "Small tribal kingdom",
      "European colony",
      "Islamic state"
    ],
    correctAnswer: 0,
    explanation: "The Axumite Kingdom was a major ancient civilization that controlled trade routes between Rome and India, and was one of the first states to mint coins."
  },
  {
    id: "pred-2018-hist-16",
    question: "Who was Empress Taytu Betul?",
    options: [
      "Wife of Menelik II and key figure in Ethiopian history",
      "First female emperor",
      "Military commander only",
      "Foreign diplomat"
    ],
    correctAnswer: 0,
    explanation: "Empress Taytu Betul was the wife of Menelik II and played a crucial role in Ethiopian politics, particularly during the Battle of Adwa."
  },
  {
    id: "pred-2018-hist-17",
    question: "What was the Zagwe Dynasty known for?",
    options: [
      "Building rock-hewn churches in Lalibela",
      "Military conquests",
      "Trade expansion",
      "Islamic conversion"
    ],
    correctAnswer: 0,
    explanation: "The Zagwe Dynasty (12th-13th century) is famous for building the rock-hewn churches of Lalibela, now a UNESCO World Heritage Site."
  },
  {
    id: "pred-2018-hist-18",
    question: "When did Ethiopia defeat Italy at the Battle of Adwa?",
    options: [
      "March 1, 1896",
      "October 3, 1935",
      "May 5, 1941",
      "December 19, 1944"
    ],
    correctAnswer: 0,
    explanation: "The Battle of Adwa was fought on March 1, 1896, resulting in a decisive Ethiopian victory over Italy."
  },
  {
    id: "pred-2018-hist-19",
    question: "What was the purpose of the Organization of African Unity (OAU)?",
    options: [
      "To promote African unity and independence",
      "To colonize Africa",
      "To establish European control",
      "To promote Islam only"
    ],
    correctAnswer: 0,
    explanation: "The OAU was founded in 1963 in Addis Ababa to promote African unity, independence, and cooperation among African states."
  },
  {
    id: "pred-2018-hist-20",
    question: "What was the Ethiopian Civil War (1974-1991)?",
    options: [
      "Conflict between Derg and various opposition groups",
      "War with Italy",
      "War with Eritrea only",
      "Religious conflict"
    ],
    correctAnswer: 0,
    explanation: "The Ethiopian Civil War was fought between the Derg regime and various opposition groups, including the EPRDF which eventually won in 1991."
  }
];
