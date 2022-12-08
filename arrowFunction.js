function sum(a,b) {
    return a+b
}

let sum2 = (a,b) => a+b;

function isPositive(number){
    return number <= 10
}
let isPositive2 = (number) => number <= 10 

function randomNum () {
    return Math.random()
}

let randomNum2 = () => Math.random()

document.addEventListener('click' , function (){
    console.log()
})

document.removeEventListener('abort', () => console.log())