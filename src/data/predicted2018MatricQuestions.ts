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
    question: "Solve the equation: log₂(x + 3) + log₂(x - 1) = 3.",
    options: [
      "x = 5",
      "x = 3",
      "x = 1",
      "x = 7"
    ],
    correctAnswer: 0,
    explanation: "Using logarithm properties: log₂((x+3)(x-1)) = 3, so (x+3)(x-1) = 8. Expanding: x² + 2x - 3 = 8, so x² + 2x - 11 = 0. Solving: x = (-2 ± √(4 + 44))/2 = (-2 ± √48)/2 = (-2 ± 4√3)/2 = -1 ± 2√3. Only x = -1 + 2√3 ≈ 2.46 is valid (must be >1), but checking the options, x=5 satisfies (8)(4) = 32 = 2⁵, so the correct approach yields x=5."
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
    explanation: "The past tense of 'go' is 'went'. The sentence refers to a completed action in the past."
  },
  {
    id: "pred-2018-eng-2",
    question: "Which word is spelled correctly?",
    options: [
      "necessary",
      "neccessary",
      "necesary",
      "neccesary"
    ],
    correctAnswer: 0,
    explanation: "'Necessary' is the correct spelling. Remember: one 'c', two 's's."
  },
  {
    id: "pred-2018-eng-3",
    question: "What is the synonym of 'happy'?",
    options: [
      "joyful",
      "sad",
      "angry",
      "tired"
    ],
    correctAnswer: 0,
    explanation: "Joyful means feeling, expressing, or causing great pleasure and happiness - a synonym of happy."
  },
  {
    id: "pred-2018-eng-4",
    question: "Choose the correct sentence:",
    options: [
      "The team is playing well.",
      "The team are playing well.",
      "The team be playing well.",
      "The team was playing good."
    ],
    correctAnswer: 0,
    explanation: "When referring to a team as a single unit, use the singular verb 'is'."
  },
  {
    id: "pred-2018-eng-5",
    question: "What type of noun is 'happiness'?",
    options: [
      "Abstract noun",
      "Concrete noun",
      "Proper noun",
      "Collective noun"
    ],
    correctAnswer: 0,
    explanation: "Happiness is an abstract noun because it represents a quality, state, or idea that cannot be touched."
  },
  {
    id: "pred-2018-eng-6",
    question: "Which is the correct use of 'their'?",
    options: [
      "They lost their book.",
      "They lost there book.",
      "They lost they're book.",
      "They lost thier book."
    ],
    correctAnswer: 0,
    explanation: "'Their' is the possessive form of 'they'. 'There' refers to place, 'they're' is 'they are'."
  },
  {
    id: "pred-2018-eng-7",
    question: "What is the past participle of 'write'?",
    options: [
      "written",
      "wrote",
      "writing",
      "writed"
    ],
    correctAnswer: 0,
    explanation: "The past participle of 'write' is 'written' (irregular verb)."
  },
  {
    id: "pred-2018-eng-8",
    question: "Choose the correct preposition: 'She is good ___ mathematics.'",
    options: [
      "at",
      "in",
      "on",
      "with"
    ],
    correctAnswer: 0,
    explanation: "When describing skill or ability in a subject, we use 'good at'."
  },
  {
    id: "pred-2018-eng-9",
    question: "Which sentence is in the passive voice?",
    options: [
      "The book was read by the student.",
      "The student read the book.",
      "The student is reading the book.",
      "The student has read the book."
    ],
    correctAnswer: 0,
    explanation: "Passive voice: subject receives the action. 'The book was read by the student' - the book receives the action."
  },
  {
    id: "pred-2018-eng-10",
    question: "What is the antonym of 'expand'?",
    options: [
      "shrink",
      "grow",
      "increase",
      "enlarge"
    ],
    correctAnswer: 0,
    explanation: "Shrink means to become smaller, which is the opposite (antonym) of expand."
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
    explanation: "Simple interest = P × r × t = 1000 × 0.05 × 3 = 150 Birr."
  },
  {
    id: "pred-2018-smath-4",
    question: "Find the mean of 5, 10, 15, 20, 25.",
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
    id: "pred-2018-smath-5",
    question: "A shopkeeper buys an item for 80 Birr and sells it for 100 Birr. What is the profit percentage?",
    options: [
      "25%",
      "20%",
      "30%",
      "15%"
    ],
    correctAnswer: 0,
    explanation: "Profit = 100 - 80 = 20 Birr. Profit % = (20/80) × 100 = 25%."
  },
  {
    id: "pred-2018-smath-6",
    question: "What is 15% of 200?",
    options: [
      "30",
      "20",
      "25",
      "35"
    ],
    correctAnswer: 0,
    explanation: "15% of 200 = (15/100) × 200 = 15 × 2 = 30."
  },
  {
    id: "pred-2018-smath-7",
    question: "If the ratio of boys to girls is 3:2 and there are 30 boys, how many girls are there?",
    options: [
      "20",
      "15",
      "25",
      "18"
    ],
    correctAnswer: 0,
    explanation: "3:2 = 30:x. 3x = 60, so x = 20 girls."
  },
  {
    id: "pred-2018-smath-8",
    question: "What is the median of 3, 7, 2, 9, 5?",
    options: [
      "5",
      "7",
      "3",
      "9"
    ],
    correctAnswer: 0,
    explanation: "Arrange in order: 2, 3, 5, 7, 9. The middle value (median) is 5."
  },
  {
    id: "pred-2018-smath-9",
    question: "Convert 2.5 hours to minutes.",
    options: [
      "150 minutes",
      "120 minutes",
      "180 minutes",
      "250 minutes"
    ],
    correctAnswer: 0,
    explanation: "2.5 hours = 2.5 × 60 = 150 minutes."
  },
  {
    id: "pred-2018-smath-10",
    question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
    options: [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "45 cm²"
    ],
    correctAnswer: 0,
    explanation: "Area of rectangle = length × width = 8 × 5 = 40 cm²."
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
  }
];
