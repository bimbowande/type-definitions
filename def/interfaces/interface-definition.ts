//interface is used to define the structure of an object


interface User{
    id:number;
    name:string;
    age:number;
    email:string;
}

const user: User = {id:1, name:"Abi", age:23, email:"abi@abimbola.com"}
const user2: User = {id:2, name:"Abi", age:23, phone:"1234567890"} //it will give an error because the interface User does not have a phone property