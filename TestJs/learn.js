let a = [1,2,3,4,5]

a.filter(
    function abc(value) {
        console.log("hàm đã được thực thi")
        return value <= 5;
    }
)

