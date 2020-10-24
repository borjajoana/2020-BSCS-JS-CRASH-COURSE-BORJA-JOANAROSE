let getAge = function(name, age){
    this.name = name
    this.age = age
    return `My name is ${name} I am ${age} yrs old`
}
console.log(`${getAge(`joana`,19)}`)