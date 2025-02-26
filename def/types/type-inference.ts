//Type Inference is the process of TypeScript inferring the type of a variable based on the value assigned to it

let totalScore = 100; //typescript will infer the type of the variable as 'number'
totalScore = "1000"; // this will give an error, because a number cannot be assigned a string
