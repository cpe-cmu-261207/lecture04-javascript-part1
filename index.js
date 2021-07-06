/* variable */
let a = 10
a = "I'm a string now"
const g = 0.98
g = 1.0
console.log(g)

console.log( 1 == 1)
console.log( '1' == 1)
console.log( '1' !== 1)

for(let i=0; i<10; i++){
	console.log(i)
}

const a = [1, 2, 30, 40]
console.log(a[0])
console.log(a[10])
console.log('eiei')

const a = ['hello', 1, false]
console.log(a)
a.push(5)
console.log(a)
a.push([6, 7, 8, 9])
console.log(a)
a.push({name: 'you'})
console.log(a)

console.log( a.indexOf('hello')) 
console.log( a.indexOf(false)) 
console.log( a.indexOf('eiei')) 
console.log( a.includes('hello'))

/* map */
function inc(x){
	return x + 1
}

const a = [1,2,3,4]
const b = a.map(inc)
console.log(b)

/* filter */
function isEven(x){
	return x % 2 === 0
}
const c = a.filter(isEven)
console.log(c)

/* reduce */
function reduceCallback(total, x){
	return total + x
}

console.log( a.reduce(reduceCallback))
//Excercise ทำให้ array a มีค่า +1 เฉพาะตัวที่เป็นเลขคู่ โดยใช้ fn filter และ map

function inc(x){ return x + 1}
function isEven(x){ return x % 2 === 0}

const b = a.map(inc)
const c = b.filter(isEven)
console.log(c)

console.log( a.map(inc).filter(isEven) )

/* arrow function */
const a = [1,2,3,4]
function inc(x){ return x + 1}
console.log( a.map( (x) => {return x + 1}))
console.log( a.map( x => {return x + 1}))
console.log( a.map( x => x + 1 ))

console.log( a.map( x => x + 1 ).filter(x => x % 2 === 0))

a.map( x => x + 1 )
	.filter(x => x % 2 === 0)

const dec = (x,y) => x + y
console.log(dec(1, 2))

/* object */
const hero = {
	'class': 'Warrior',
	"dmg": 3,
	hp: 10
}
console.log(hero)
console.log(hero['dmg'])
console.log(hero.dmg)
hero['dmg'] += 10
console.log(hero.dmg)

const hero = {
	'class': 'Warrior',
	"dmg": 3,
	hp: 10,
	pets: [
		{
			class: 'dog',
			dmg: 2,
			hp: 5
		}
	]
}

hero.items = ['sword', 'shield']
console.log(hero)
console.log(hero.level)
console.log(undefined == 0)
hero.items.push('helmet')
console.log(hero.items)
hero.pets.push({class: 'cat', dmg: 1, hp: 4})
console.log(hero.pets)


const students = [
	{
	  name: 'Bob', gpa: 4.00
	},
	{
	  name: 'Alice', gpa: 3.5
	},
	{
	  name: 'Alex', gpa: 3.00
	}
  ]
// Exercise: ต้องการชื่อของคนที่มีเกรดน้อยกว่า 4.00 // คำตอบ-> ['Alice', 'Alex']
// คำตอบ
// const result = students
//   .filter( student => student.gpa < 4.00)
//   .map( student => student.name)
// console.log(result)

// Exercise : ลองสลับ ใช้ filter ก่อน map แล้วดูว่า ผลลัพธ์เหลือนเดิมไหม