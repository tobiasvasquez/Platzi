function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const generator = gen();

// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)

function* iterable(array){
    for (let value of array){
        yield value
    }
}

const iterate = iterable(['Tob', 'Oscar', 'Omar', 'Ana', 'Lucia', 'Juan'])
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);