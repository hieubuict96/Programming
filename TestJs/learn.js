let a = [1,2,3, { a: "abc", b: "def"}]

let b = a.find(item => item.a === "abc")

a = 0;

console.log(b)
