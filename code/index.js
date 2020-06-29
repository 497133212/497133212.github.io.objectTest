var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

var user = {
    name: "john",
    surname: "Mike"
}
user.name = "Peter";
delete user.name;
var sum = fruit.apple + fruit.pear + fruit.peach;
console.log(sum);