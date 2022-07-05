// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibo", () => {
    it("takes in a number that is greater than two and returns an array of that length, containing the numbers of the Fibonacci sequence", () => {
        expect(fibo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
        expect(fibo(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// b) Create the function that makes the test pass.

// This program will allow the user to take in a number and return it as an array of that index length, following the Fibonacci sequence.
// Create a function expression. (fibo)
// create a variable that represents the beginning of the sequence, in an array. (x)
// create a variable to represent the starting index of the new array. (y)
// create an if statement that executes when the parameter entered is a number greater than 2. 
    // Within if, create a for statement that will start at index 2, stop at the index length represented by the parameter and counting up.
        // Within for, create a variable that represents the current index value, subtracted by one, added to the same value, subtracted by 2. 
        // Within for, use the push method to add the new variable to the y array.
    // return the y array. 
// Console log with the challenge parameters.

let fibo = (n) => {
    let x = [0, 1];
    let y = [1];
    if(n > 2) {
        for(i = 2; i <= n; i++) {
            x[i] = x[i - 1] + x[i - 2];
            y.push(x[i])
        }
        return y
    }
}

console.log(fibo(fibLength1))

console.log(fibo(fibLength2))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("odds", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(odds(fullArr1)).toEqual([-9, 7, 9, 199]);
        expect(odds(fullArr2)).toEqual([-823, 7, 23])
    })
})

// b) Create the function that makes the test pass.

// Create a program that will allow the user to take in an array and return a new array of only odd numbers that are sorted fron least to greatest. 
// Create a function expression. (odds)
// Create a variable that uses the filter method on the parameter.
    // Within filter, create an if statement that uses the arguements of the type of element and a number possessing a remainder not equal to zero. The filter method will return all elements off the array, that match the arguements. 
// return the variable with the sort method applied. Include two parameters in the sort method the will represent the first being subtracted from the second. This will return the numbers in order by overall value, rather than the index value of the first digit.
// Console log with the challenge parameters

let odds = (n) => {
    x = n.filter(x => {
        if(typeof x === "number" && x % 2 !== 0) {
            return x
        }
    })
    return x.sort((a, b) => a - b)
}

console.log(odds(fullArr1))

console.log(odds(fullArr2))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("addEm", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        expect(addEm(numbersToAdd1)).toEqual([2, 6, 51, 60]);
        expect(addEm(numbersToAdd2)).toEqual([0, 7, -1, 11]);
        expect(addEm(numbersToAdd3)).toEqual([])
    })
})

// b) Create the function that makes the test pass.

// This program will allow the user to take in an array and return an array that has the accumulating sum of the previous array. Empty array will return an empty array. 
// Create a function expression. (addEm)
// Create a variable that uses the map method on a parameter. 
    // Within map, enter an element and index value parameter. The index will indicate what value the element starts at. The element will be the value of each element mapped, summed into a new array. 
    // Return the variable of the new array.
// Console log with the challenge parameters.

let addEm = (a) => {
    x = a.map((sum => value => sum+= value)(0))
    return x
}

console.log(addEm(numbersToAdd1))

console.log(addEm(numbersToAdd2))

console.log(addEm(numbersToAdd3))