function getSomeValue() {
    return 2
}

function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * getSomeValue()
}

const result = myFunction(5)

console.log(result)