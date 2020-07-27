// 1 functii
// Function declaration
// function greet(name) {
//     console.log('Salut -', name)
// }
// function expretion
// const greet2 = function(name) {
//     console.log('Salut2 -', name)
// }

// greet('Lena')
// greet2('Lena')

// console.log(typeof greet)

// console.dir(greet)

// 2 Functii anonime
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//     clearInterval(interval)  // clearTimeout

// }  {
//     console.log (++counter)
// }
    
// }, 1000)

// 3 functii sageti
// function greet(name) {
//      console.log('Salut -', name) 
// }

// const arrow = (name) => {
//      console.log('Salut -', name, age)
// }

// const arrow2 = name => console.log('Salut -', name)

// // arrow2('Lucian')

// const pow2 = num => {
//     return num ** 2
// }

// console.log(pow2(5))

// 4 Parametri impliciti
// const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41, 4))
// console.log(sum())

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 inchiderile
// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName)
//     }
// }

// const logWithLastNAme = createMember('Lucian')
// console.log(logWithLastNAme('Savga'))
// console.log(logWithLastNAme('Barca'))