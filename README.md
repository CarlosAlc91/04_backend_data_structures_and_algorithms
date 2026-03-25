# 🧩 Data Structures & Algorithms (DSA) with TypeScript

> A personal laboratory for mastering algorithms and data structures on the path to becoming a Backend Developer.

## 📚 Reference Books

- **Grokking Algorithms** — Aditya Bhargava
- **Eloquent JavaScript** — Marijn Haverbeke
- **Learning TypeScript** — Josh Goldberg

## 🚀 How to Run the Exercises

Since this project uses **ESM (ECMAScript Modules)** and **TypeScript**, you can run any file in the `src/` folder independently using the following command:

```bash
npm run dev src/<folder>/<filename>.ts

```

**Examples**

```bash
npm run dev src/01_Hashing/validAnagram.ts
npm run dev src/02_Binary_Search/binarySearch.ts
npm run dev src/03_Two_Pointers/twoSum.ts

```

## 📂 Repository Contents

src/
├── 01_Hashing/
│   └── validAnagram.ts        # Frequency counter pattern - O(n)
├── 02_Binary_Search/
│   └── binarySearch.ts        # Divide and conquer - O(log n)
├── 03_Two_Pointers/
│   └── twoSum.ts              # Hash map approach - O(n)
└── 04_Sorting/              
    └── selectionSort.ts       # Simple sorting - O(n²)

## 🛠️ Tech Stack

Runtime: Node.js

Language: TypeScript (ESM)

Execution: node --loader ts-node/esm

Compiling: tsc (TypeScript Compiler)

## ✍️ Key Concepts Learned

Binary Search: Only works on sorted lists. It drastically reduces the number of steps compared to a linear search.

Big O Notation: Used to describe how fast an algorithm is as the input size grows.

Developed by Carlos (Charly) - Software Design and Networks Engineering Student at UVM.
