var abc = [
    {
        a: 1,
        b: 2
    },
    {
        a: 3,
        b: 4
    },
    {
        a: 5,
        b: 6
    },
    {
        a: 3,
        b: 4
    }
]

var bbb = abc.filter(item => {
    return (
        item.a == 3
    )
})

console.log(bbb)