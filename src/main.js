var x = 10;
console.log(x);
var y = 30;
var title = 'hello world';
var sum;
var isTrue = false;
var list1 = [1, 2, 3];
var list3 = ['1', '2', '3'];
var tuple1 = ['saku', true];
var color;
(function (color) {
    color[color["User"] = 0] = "User";
    color[color["SuperUser"] = 1] = "SuperUser";
    color[color["Admin"] = 2] = "Admin";
    color[color["SuperAdmin"] = 3] = "SuperAdmin";
})(color || (color = {}));
;
var c = color.SuperUser;
console.log(c);
function saku(obj) {
    console.log("saku", obj.id);
}
saku({ id: "1" });
var random = 10;
random = true;
random = 'saku';
var multitype;
multitype = 20;
multitype = true;
function product(num1, num2) {
    if (num2) {
        return num1 * num2;
    }
    return num1;
}
console.log("production result: ", product(5, 10));
product(5);
function devide(num1, num2) {
    if (num2) {
        return num1 / num2;
    }
    return num1;
}
devide(10, 5);
console.log("division result: ", devide(5));
function printing(name) {
    console.log("my name is ", name);
}
printing('saku');
