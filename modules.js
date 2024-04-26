const name = "Karen";

const names = require("./modules1");
const func = require("./modules2");

func(name);
func(names.jhon);
func(names.jerry);

const person = require("./alterModule");
console.log(person.persons.Age);
console.log(person.persons.name);
console.log(person.items);
require("./funcModule");
