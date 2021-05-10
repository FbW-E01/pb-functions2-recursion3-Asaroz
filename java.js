// Find the nth Fibonacci number
// Write a JavaScript program to get the first n Fibonacci numbers.

// Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

// fibonnaci(0)=> [0]
// fibonnaci(1)=> [0,1]
// fibonnaci(2)=> [0,1,1]
// fibonnaci(8)=> [0, 1, 1, 2, 3, 5, 8, 13,21]
//     fibonnaci(8) //  [0, 1, 1, 2, 3, 5, 8, 13,21]  


console.log(fibonnaci(0))
console.log(fibonnaci(1))
console.log(fibonnaci(2))
console.log(fibonnaci(8))
console.log(fibonnaci(8))
console.log(fibonnaci(20))
console.log(fibonnaci(50))

function fibonnaci(n, array=[0,1],helper=2) {
    n2 = n+1
    if(n===0){return [0]}
    if(n===1){return[0,1]}
    if((n2==helper)){return array}
    array.push(array[helper-1]+array[helper-2])
    helper++
    return fibonnaci(n,array,helper)
}