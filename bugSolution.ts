function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//Corrected code:
console.log(greeter(user.join(" "))); //Solves the issue by joining the array into a string