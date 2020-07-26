let list_name = [
    "Nguyen Van Tung",
    "Tao Van Nguyen",
    "Tran Manh Nam",
    "Nguyen Dinh Duc"
]

var sum = 0

list_name.forEach(_name => {
    _name.split(" ");
    let only_name = _name.pop();
    only_name.split("");
    let check_name = only_name.filter(char => {
        return char == "n";
    })
    if (check_name) {
        sum += 1;
    }
})

console.log(sum);

