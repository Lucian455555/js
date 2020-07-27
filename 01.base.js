//1 peremenaia
// variable (variabil)
//var name = 'Lucian'
//camelCase

// const firstName = 'Lucian'
//const age = 21              // number
// const isProgrammer = true   //boolean

// const _ = 'private'
// const $ = 'some value'

//const if =',sadas' //greseala

// const withNum5 = '5'
//const 5withNum = 5 //greseala

// 2 mutatie

//console.log('numele omului: ' + firstName + ', varsta omului:' + age)
//alert('numele omului: ' + firstName + ', varsta omului:' + age)

// const lastName = prompt ('introduceti numele')
// alert(firstName + ' ' + lastName)

//3 operatori

// let currentYear = 2020
// const birthYear = 1999

//const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a


// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 tipuri de date in js
// const isProgrammer = true 
// const name = 'Lucian'
// const age = 21
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 prioritatea operatorilor
// const fullAge = 21
// const birthYear = 1999
// const currentYear = 2020

//> < >= <=
// const isFullAge = currentYear - birthYear >= fullAge //20 >= 21=> true
// console.log(isFullAge)

//6 conditiile operatorului
// const courseStatus = 'fail'   //ready, fail, panding

// if (courseStatus === 'ready') {
// console.log(' Cursul este gata si se poate de trecut')
// } else if (courseStatus === 'pending') {
//     console.log(' Cursul este in proces de fabricare')
// } else {
//     console.log('Cursul nu sa primit')
// }

// const isReady = false

// if (isReady === true) {
//     console.log('totul este gata!')
// } else {
//     console.log('numic nu este gata')
// }

// isReady ? console.log('totul este gata!') : console.log('numic nu este gata')

// const num1 = 42
// const num2 ='42'

// console.log(num1 === num2)

//7 logica booleana
// a1 = true && true
// a2 = true && false
// a3 = false && false
// a4 = false && (3 == 4)
// a5 = "cat" && "dog"
// a6 = false && "cat"
// a7 = "cat" && false
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

//8 functii

// function calculateAge(year) {
//     return 2020 - year
// }

// // console.log(calculateAge(1999))
// // console.log(calculateAge(1994))
// // console.log(calculateAge(1820))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {   
//     console.log('Persoana pe numele ' + name + ' are varsta de ' + age)
//   } else {
//     console.log('Acesta este deja viitorul!')
//   }
// }

// logInfoAbout('Lucian', 1999)
// logInfoAbout('Raluca', 2001)
// logInfoAbout('Robert', 2027)

//9 masive
//  const cars = ['Mazda', 'Mercedes', 'Ford']
//  console.log(cars.length)
//  console.log(cars[1])
//  console.log(cars[0])
//  console.log(cars[2])

//  cars[0] = 'Porsche'
//  cars[3] = 'Mazda'
//  console.log(cars)

 //10 cicluri

//  const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche']
//  for (let i = 0; i < cars.length; i++) {
//      const car =cars[i]
//      console.log(car)
//  }

// for (let car of cars) {
//     console.log(car)
// }

//11 obiecte

// const person = {
//     firstName: 'Lucian',
//     lastName: 'Savga',
//     year: 1999,
//     language: ['ru', 'ro', 'eng'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet form person')
//     }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)

// person.greet()