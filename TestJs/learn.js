let a = [{a: "ab", b: "cd"}, {a: "ef", d: "gh"}]

let b = a.map(value => {
    return value.a;
})

a = 1;

console.log(b)