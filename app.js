/* Object Types */
// const person : {
//     name: string;
//     age: number
// }
var person = {
    name: "Carolyn",
    age: 37,
    hobbies: ['reading', 'cooking', 'coding']
};
var favouriteActivites;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
console.log(Role.ADMIN);
