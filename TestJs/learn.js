let obj = {
    a: "abc",
    a: "def",
    a: "ghi",
    d: "klm"
}

const ab = {...obj}
const ghi = [ab, "nov"]
console.log(ghi)

