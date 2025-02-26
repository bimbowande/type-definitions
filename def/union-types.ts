//a variable or function parameter can have more than one type

let uId: string | number;
uId = 405
uId = "user-405"
uId = true // this will give error because boolean is not a string or number

function add(a: number | string, b: number | string) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString()
    }
    return a + b
}
