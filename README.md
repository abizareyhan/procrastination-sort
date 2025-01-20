# 😴 procrastination-sort

[![npm version](https://img.shields.io/npm/v/procrastination-sort?color=critical&label=version)](https://www.npmjs.com/package/procrastionation-sort)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`procrastination-sort` is a hilariously inefficient sorting algorithm implemented in TypeScript. It embodies the true spirit of procrastination, taking frequent breaks for 'important' activities like checking social media, watching cat videos, and pondering the meaning of life. It will sort your array... eventually.


## Installation
```bash
npm install procrastination-sort
```

## Features
- ✅ Eventually accurate (like your sprint estimates)
- ☕ Coffee-driven development (cups tracked)
- 😴 Built-in procrastination routines (internet drama, infinite scrolling, etc)
- 📊 Productivity metrics (swaps made vs. excuses used)
- 🚀 Prod-ready? (we've deployed worse)

## Basic Usage
```typescript
import { procrastinationSort } from 'procrastination-sort';

const unsortedArray = [6, 3, 4, 1, 2, 9, 7, 8, 5];
procrastinationSort(unsortedArray).then((result) => {
    console.log(result.sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(result.timeElapsed); // Output: 160868.165458
    console.log(result.coffeeCups); // Output: 62
    console.log(result.swapsMade); // Output: 7
    console.log(result.excusesUsed); // Output: ['Googling 'how to sort arrays'', 'Watching another cat videos on YouTube', ...]
});
```

## Sorting with Custom Comparator
You can provide a custom comparison function for non-numeric arrays:
```typescript
import { procrastinationSort } from 'procrastination-sort';

const unsortedArray = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 },
    { name: 'Doe', age: 30 },
    { name: 'Alice', age: 27 },
    { name: 'Bob', age: 20 },
];

procrastinationSort(unsortedArray, {
    comparator: (a, b) => a.age - b.age,
}).then((result) => {
    console.log(result.sortedArray); // Output: [{ name: 'Bob', age: 20 }, { name: 'Jane', age: 22 }, ...]
});
```

## Verbose Mode
Enable verbose mode to get a play-by-play of the algorithm's procrastination:
```typescript
import { procrastinationSort } from 'procrastination-sort';

const unsortedArray = [6, 3, 4, 1, 2, 9, 7, 8, 5];
procrastinationSort(unsortedArray, { verbose: true });

// Output:
//
// Trying to sort...
// Googling 'how to sort arrays'
// Trying to sort...
// Decided to actually sort!
// Swapped elements at index 3 and 4...
// Taking coffee break #1...
// Trying to sort...
// Watching another cat videos on YouTube
// Trying to sort...
// Decided to actually sort!
// Swapped elements at index 6 and 7...
// Taking coffee break #2...
// Trying to sort...
// Checking drama on Twitter/X
// ...
// ...
//
// --- Sorting Complete! ---
// Time taken: 160.868 seconds
// Coffee breaks taken: 62
// Swaps made: 7
// Excuses used:
//    1. Googling 'how to sort arrays'
//    2. Watching another cat videos on YouTube
//    3. Checking drama on Twitter/X
//    ...
//    ...
```

## Custom Procrastination Activities, Probability,
You can customize what it does while procrastinating!

```typescript
import { procrastinationSort } from 'procrastination-sort';

const unsortedArray = [6, 3, 4, 1, 2, 9, 7, 8, 5];
procrastinationSort(unsortedArray, {
    procrastinationProbability: 0.5,
    procrastinationActivities: ['Taking a nap', 'Playing video games', 'Watching TV', 'Cook a meal'],
    minDelay: 1000,
    maxDelay: 10000,
});
```

## Output
The procrastinationSort function returns an object of type `ProcrastinationResult<T>` with the following properties:

```typescript
export interface ProcrastinationResult<T> {
    sortedArray: T[]; // The sorted array
    timeElapsed: number; // Time taken in milliseconds
    swapsMade: number; // Number of swaps made
    coffeeCups: number; // Number of coffee breaks taken
    excusesUsed: string[]; // List of excuses used
}
```

## Time and Space Complexity
### Theoritical Analysis
| Metric            | Complexity        | Real-World Interpretation                           |
|-------------------|-------------------|-----------------------------------------------------|
| Time (Best Case)  | O(n²)             | Array was sorted, but you checked Twitter anyway    |
| Time (Avg Case)   | O(n² × (1/(1-p))) | Where p = procrastinationProbability (default 0.85) |
| Time (Worst Case) | O(∞)              | Got stuck in setTimeout purgatory watching Netflix  |
| Space             | O(1)              | Unless you count RAM used by Chrome tabs            |

### Real-World Benchmarks
| Array Size   | Default (p=0.85)        | p=0.99 (Chaos Mode)               |
|--------------|-------------------------|-----------------------------------|
| 5 elements   | 3.2s (4 coffee breaks)  | 17min ("I'll fix it after lunch") |
| 10 elements  | 2.1h ("Just 1 more PR") | Until next sprint planning        |
| 100 elements | ⏳ See you next week     | ⏳ See you next quarter            |

## Contributing
While this project doesn't actively seek contributions, we'll accept issues and pull requests on a best-effort basis - which in practice means:
- Your brilliant idea might get reviewed
- PRs will be judged by how well they align with our core values (coffee breaks > code quality)
- Documentation updates take priority (we enjoy feeling productive without actual work)
- No guarantees, timelines, or commitments
