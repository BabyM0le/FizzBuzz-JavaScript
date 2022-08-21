function fizzBuzz(count){
    let numbers = []
    for(let i = 1; i < count + 1; i++) {
        if(i % 3 == 0 && i % 5 == 0) numbers.push('FizzBuzz')
        else if(i % 3 == 0) numbers.push('Fizz')
        else if(i % 5 == 0) numbers.push('Buzz')
        else numbers.push(i)
    }
    return numbers
}
console.log(fizzBuzz(100))