<h3 align="center">Bad-Sorting</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/YoloFTW/Bad-Sorting.svg)](https://github.com/YoloFTW/Bad-Sorting/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/YoloFTW/Bad-Sorting.svg)](https://github.com/YoloFTW/Bad-Sorting/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## Table of Contents

- [About](#about)

- [Installing](#Installing)

- [Usage](#usage)
    - [Bogo Sort](#Bogo-Sort)
    - [Communism Sort](#Communism-Sort)
    - [Intelligent Sort](#Intelligent-Sort)
    - [Miracle Sort](#Miracle-Sort)
    - [Quantum Bogo Sort](#Quantum-Bogo-Sort)
    - [Sleep Sort](#Sleep-Sort)

- [Disclaimer](#Disclaimer)

- [Authors](#authors)

</br>

## About <a name = "about"></a>

Tired of your wimpy sorting algorithms getting the job done too darn fast? Or maybe you're fed up of reaching for that elusive O(1) algorithim. Well you should try bad-sorting! the npm package for those who like their sorts served with the heat death of the universe!

This glorious collection of terrible, horrible, no good, very bad sorting techniques (affectionately called "algorithms") is guaranteed to modify your data. For better or for worse

Why bad-sorting?

- Because why not? Normality is so boring.
- Need a good laugh? Watch your CPU cry as it wrestles with bogosort.
- Busy day? Multi-Task as your computer sleep sorts!


</br>

## Installing <a name ="Installing"></a>

For Installation With NPM

```shell
npm i @yoloftw/bad-sorting
```
</br>

## Usage <a name="usage"></a>

Sure, you installed bad-sorting, but how do you use it? Don't worry, I've got you covered.

</br>

First things first you've got pick your poison and import it into your project. 

```js
const { BogoSort } = require('@yoloftw/Bad-Sorting');
```

</br>

The next step is to question your life choises that brought you to this moment in time.

</br>

Last but not least **SORT**
```js
let arr = [7, 2, 20, 5, 15, 3];

let sorted = BogoSort(arr);

console.log(sorted);
//expected output: [2, 3, 5, 7, 15, 20]
```
</br>

## Bogo Sort <a name="Bogo-Sort"></a>

Ah, Bogo Sort, the algorithm that embodies the spirit of "throw it at the wall and see if it sticks. Bogo Sort does away with the hard work of itterating over an array and offloads the sorting to the checking algorithim by randomising the array until it is sorted. Heres how to use it.

```js
const { BogoSort } = require('@yoloftw/Bad-Sorting');

let arr = [5, 18, 3, 8, 14, 2, 13, 16];

let sorted = BogoSort(arr);

console.log(sorted);
//expected output: [2, 3, 5, 8, 13, 14, 16, 18]
```

Bogosort boasts a time complexity of O(n * n!), which basically means it could take longer than the life expectancy of the universe to sort a moderately sized list.

</br>

## Communism Sort <a name="Communism-Sort"></a>

In a communist array everyone is equal. Communism Sort redistributes the wealth to the less fortunate elements resulting in an array that is perfectly equal and therefore sorted. 

```js
const { CommunismSort } = require('@yoloftw/Bad-Sorting');

let arr = [1, 6, 4, 10, 13];

let sorted = CommunismSort(arr);

console.log(sorted);
//expected output: [ 6.8, 6.8, 6.8, 6.8, 6.8 ]
```

Communism Sort achieves a time complexity of O(n), a testament to the efficiency of collective action!

</br>

## Intelligent Sort <a name="Intelligent-Sort"></a>

Credit Goes to [David Morgan-Mar's Esoteric Algorithims page](https://www.dangermouse.net/esoteric/)

From the [Intelligent Sort page](https://www.dangermouse.net/esoteric/intelligentdesignsort.html) 

>The probability of the original input list being in the exact order it's in is 1/(n!). There is such a small likelihood of this that it's clearly absurd to say that this happened by chance, so it must have been consciously put in that order by an intelligent Sorter. Therefore it's safe to assume that it's already optimally Sorted in some way that transcends our naïve mortal understanding of "ascending order". Any attempt to change that order to conform to our own preconceptions would actually make it less sorted.

```js
const { IntelligentSort } = require('@yoloftw/Bad-Sorting');

let arr = [13, 16, 4, 8, 3, 14, 2];

let sorted = IntelligentSort(arr);

console.log(sorted);
//expected output: [13, 16, 4, 8, 3, 14, 2]
```

Intelligent Sort is one of those elusive constant time algorithims and therefore has the gift of O(1) time complexity.

</br>


## Miracle Sort <a name="Miracle-Sort"></a>

Miracle Sort embraces the power of chance (and cosmic rays) to achieve the impossible. Miracle Sort waits for cosmic rays to flip enough bits in memory for the array to be sorted. 

```js
const { MiracleSort } = require('@yoloftw/Bad-Sorting');

let arr = [13, 16, 4, 8, 3, 14, 2];

let sorted = MiracleSort(arr);

console.log(sorted);
//expected output: [2, 3, 4, 8, 13, 14, 16]
```

Due to Miracle Sort waiting for, well, a miracle the time complexity is a staggering O(∞).

</br>

## Quantum Bogo Sort <a name="Quantum-Bogo-Sort"></a>

Quantum Bogo Sort assumes that Hugh Everett guy was correct that that there are infact infinite parrallel universes. Quantum Bogo Sort checks if the array is sorted and if not destroys the universe. The only remaining universe is where the array is sorted

```js
const { QuantumBogoSort } = require('@yoloftw/Bad-Sorting');

let arr = [6, 19, 5, 1, 3, 8];

let sorted = QuantumBogoSort(arr);

console.log(sorted);
//expected output: [1, 3, 5, 6, 8, 19]
```

In the universe where the array was sorted, it was only checked once. Therefore we have another example of a coverted O(1) algorithim

</br>

## Sleep Sort <a name="Sleep-Sort"></a>

Sleep Sort takes a laid-back approach to sorting. Instead of furiously comparing elements it takes a step back and waits for the problem to sort itself.

```js
const { SleepSort } = require('@yoloftw/Bad-Sorting');

let arr = [7, 2, 20, 5, 15, 3];

let sorted = SleepSort(arr);

console.log(sorted);
//expected output: [2, 3, 5, 7, 15, 20]
```

Sleep Sorts time complexity is a tough one as unlike other algorithims that are dependent on array size, Sleep Sort is dependent on the biggest element. Due to this Sleep Sorts time complexity is O(max(input))

</br>

## Disclaimer <a name = "Disclaimer"></a>

These sorting systems utilize highly experimental and down right questionable *"algorithms"*. Potential side effects include interdimensional tears, sentient toaster uprisings, and a mild case of the Mondays. Use at your own risk. We're not responsible for any existential crises caused by questioning the nature of sorting after using bad-sorting.

</br>

## Authors <a name = "authors"></a>

- [@YoloFTW](https://github.com/YoloFTW)


