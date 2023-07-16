export const exercises = [
	{
		point: "0",
		headline: "Sum pairs",
		paragraphs: [
			"Given an unsorted integer array, find a pair with the given sum in it.",
			"Each input can have multiple solutions. The output should match with either one of them",
		],
		example: ["let listOfNumber = [8, 7, 2, 5, 3, 1]"],
		solution: ["(8, 2)", "(7, 3)"],
	},
	{
		point: "1",
		headline: "Sort Binarty Array",
		paragraphs: [
			"Given a binary array, in-place sort it in linear time and constant space. The output should contain all zeroes, followed by all ones.",
		],
		example: ["Input : [1, 0, 1, 0, 1, 0, 0, 1]"],
		solution: ["Output: [0, 0, 0, 0, 1, 1, 1, 1]"],
	},
	{
		point: "2",
		headline: "Spiral matrix",
		paragraphs: [
			"Given an `M × N` integer matrix, shift all its elements by `1` in spiral order.",
		],
		example: [
			"input:[\n[ 1,  2,  3,  4, 5],\n[16, 17, 18, 19, 6],\n[15, 24, 25, 20, 7],\n[14, 23, 22, 21, 8],\n[13, 12, 11, 10, 9]\n]",
		],
		solution: [
			"Output:[\n[25,  1,  2,  3, 4],\n[15, 16, 17, 18, 5],\n[14, 23, 24, 19, 6],\n[13, 22, 21, 20, 7],\n[12, 11, 10,  9, 8]\n]",
		],
	},
	{
		point: "3",
		headline: "Rotate matrix",
		paragraphs: [
			"Given an `N × N` integer matrix, rotate the matrix by 90 degrees in a clockwise direction. The transformation should be done in-place and in quadratic time.",
		],
		example: [
			"input:[\n[1, 2, 3, 4],\n[5, 6, 7, 8],\n[9,10,11,12],\n[13,14,15,16]\n]",
		],
		solution: [
			"Output:[\n[13, 9,  5, 1],\n[14, 10, 6, 2],\n[15, 11, 7, 3],\n[16, 12, 8, 4],\n]",
		],
	},
	{
		point: "4",
		headline: "Maximun Product Pair",
		paragraphs: [
			"Given an integer array, find a pair with the maximum product in it.",
			"Each input can have multiple solutions. The output should match with either one of them.",
			"If no pair exists, the solution should return the pair (-1, -1)."
		],
		example: [
			"Input : [-10, -3, 5, 6, -2]\n","Output: (-10, -3) or (-3, -10) or (5, 6) or (6, 5)"
		],
		solution: [
			"Input : [-4, 3, 2, 7, -5]\n", "Output: (3, 7) or (7, 3)",
		],
	},
	{
		point: "5",
		headline: "Mayority Element",
		paragraphs: [
			"Given an integer array of size `n`, return the element which appears more than `n/2` times.",
			"Assume that the input always contain the majority element.",
		],
		example: [
			"Input : [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]\n", "Output: 2"
		],
		solution: [
			"Input : [1, 3, 1, 1]\n","Output: 1",
		],
	},
	{
		point: "6",
		headline: "Largest Subarray",
		paragraphs: [
			"Given a binary array containing 0’s and 1’s, find the largest contiguous subarray with equal numbers of 0’s and 1’s.",
		],
		example: [
			"Input : [0, 0, 1, 0, 1, 0, 0]\n",,
			"Input : [0, 0, 0, 0]\n","Output: []"	
		],
		solution: [
			"Output: [0, 1, 0, 1] or [1, 0, 1, 0]"
		],
	},
	{
		point: "7",
		headline: "Maximun Product Pair",
		paragraphs: [
			"Given an integer array, find a pair with the maximum product in it.",
			"Each input can have multiple solutions. The output should match with either one of them.",
			"If no pair exists, the solution should return the pair (-1, -1).\nInput : [1]\nOutput: (-1, -1)"
		],
		example: [
			"Input : [-10, -3, 5, 6, -2]\n",
		],
		solution: [
			"Output: (-10, -3) or (-3, -10) or (5, 6) or (6, 5)"
		],
	},
	{
		point: "8",
		headline: "Move Zeroes to end",
		paragraphs: [
			"Given an integer array, in-place move all zeros present in it to the end. The solution should maintain the relative order of items in the array and should not use constant space.",
		],
		example: [
			"Input : [6, 0, 8, 2, 3, 0, 4, 0, 1]\n",
		],
		solution: [
			"Output: [6, 8, 2, 3, 4, 1, 0, 0, 0]"
		],
	},
	{
		point: "9",
		headline: "Check Anagram",
		paragraphs: [
			"Given two strings, determine whether they are anagrams.",
			"Any word that exactly reproduces the letters in another order is an anagram. In other words, X and Y are anagrams if by rearranging the letters of X, we can get Y using all the original letters of X exactly once."
		],
		example: [
			'Input: X = "silent", Y = "listen"\n',
			"Output: true\n",	
		],
		solution: [
			'Input: X = "incest", Y = "insect"'
		],
	},
	{
		point: "10",
		headline: "Search Sorted Array",
		paragraphs: [
			"Given a sorted integer array and a target, determine if the target exists in the array in logarithmic time. If target exists in the array, the procedure should return the index of it.",
			"If the target is not located, the procedure should return -1"
		],
		example: [
			"Input = [2, 3, 5, 7, 9], target = 7",
		],
		solution: [
			"Output: 3\n",
			"Explanation: Element found at 4th (index 3) position"
		],
	},
];
