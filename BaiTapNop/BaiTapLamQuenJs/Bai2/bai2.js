let arr = [
    1,
    4,
    2,
    3
]
  
let arrNew = arr.map(value => {
    return value*2;
})
    arrNew.sort();
    console.log(arrNew);