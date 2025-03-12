const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const objList = people.forEach((element) =>{
  console.log(people)
}) 


for (let i = 0; i < people.length; i++) {
  const objList = people[i];
  console.log(objList)
}