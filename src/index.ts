export interface ProcrastinationResult<T> {
	sortedArray: T[]; // The sorted array
	timeElapsed: number; // Time taken in milliseconds
	swapsMade: number; // Number of swaps made
	coffeeCups: number; // Number of coffee breaks taken
	excusesUsed: string[]; // List of excuses used
}

export async function procrastinationSort<T>(
	array: T[],
	config: {
		verbose?: boolean;
		procrastinationProbability?: number;
		procrastinationActivities?: string[];
		minDelay?: number;
		maxDelay?: number;
		comparator?: (a: T, b: T) => number;
	} = {}
): Promise<ProcrastinationResult<T>> {
	const defaultConfig = {
		verbose: false,
		procrastinationProbability: 0.85,
		procrastinationActivities: [
			"Googling 'how to sort arrays'",
			'Watching another cat videos on YouTube',
			'Checking drama on Twitter/X',
			'Scrolling through Instagram',
			'Binge-watching Netflix',
			'Reading random articles on Medium',
			'Refactoring unnecessary code',
			'Learning a new technology',
		],
		minDelay: 500,
		maxDelay: 5000,
		comparator: (a: T, b: T) => Number(a) - Number(b),
	};

	const finalConfig = { ...defaultConfig, ...config };

	const startTime = performance.now();
	let sorted = false;
	let coffeeCups = 0;
	let swapsMade = 0;
	const excuses: string[] = [];
	const comparator = finalConfig.comparator || ((a: unknown, b: unknown) => Number(a) - Number(b));

	while (!sorted) {
		if (finalConfig.verbose) console.log('Trying to sort...');

		if (Math.random() < finalConfig.procrastinationProbability) {
			const activity = finalConfig.procrastinationActivities[Math.floor(Math.random() * finalConfig.procrastinationActivities.length)];
			excuses.push(activity);
			if (finalConfig.verbose) console.log(activity);
			coffeeCups++;

			await new Promise((resolve) =>
				setTimeout(resolve, Math.random() * (finalConfig.maxDelay - finalConfig.minDelay) + finalConfig.minDelay)
			);

			continue;
		}

		if (finalConfig.verbose) console.log('Decided to actually sort!');

		let didSwap = false;
		for (let i = 0; i < array.length - 1; i++) {
			if (comparator(array[i], array[i + 1]) > 0) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				swapsMade++;
				didSwap = true;
				if (finalConfig.verbose) console.log(`Swapped elements at index ${i} and ${i + 1}...`);
				break;
			}
		}

		sorted = array.every((_, i) => i === array.length - 1 || comparator(array[i], array[i + 1]) <= 0);

		if (!sorted && didSwap) {
			coffeeCups++;
			if (finalConfig.verbose) console.log(`Taking coffee break #${coffeeCups}...`);
		}
	}

	const timeElapsed = performance.now() - startTime;
	const timeInSeconds = (timeElapsed / 1000).toFixed(3);

	if (finalConfig.verbose) {
		console.log(`\n--- Sorting Complete! ---`);
		console.log(`Time taken: ${timeInSeconds} seconds`);
		console.log(`Coffee breaks taken: ${coffeeCups}`);
		console.log(`Swaps made: ${swapsMade}`);
		console.log(`Excuses used:`);
		excuses.forEach((excuse, index) => {
			console.log(`   ${index + 1}. ${excuse}`);
		});
	}

	return {
		sortedArray: array,
		timeElapsed,
		swapsMade,
		coffeeCups,
		excusesUsed: excuses,
	};
}
