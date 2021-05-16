/* Object Types */

// const person : {
//     name: string;
//     age: number
// }
const person = {
    name: "Carolyn",
    age: 37,
    hobbies: ['reading', 'cooking', 'coding']
}

let favouriteActivites: string[]

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby)
}

enum Role { ADMIN, READ_ONLY, AUTHOR}

console.log(Role.ADMIN)