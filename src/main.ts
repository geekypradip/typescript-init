let x: number = 10;
console.log(x);

const y: number = 30;
const title: string = 'hello world';
let sum: number;
let isTrue: boolean = false;
let list1: number[] = [1, 2, 3]
let list3: Array<string> = ['1', '2', '3']
let tuple1: [string, boolean] = ['pradip', true];
enum color { User, SuperUser, Admin, SuperAdmin };
let c: color = color.SuperUser;
console.log(c);
type obj = {
    id: string;
}
function pradip(obj: obj) {
    console.log("pradip", obj.id)
}
pradip({ id: "1" })

let random: any = 10;
random = true;
random = 'pradip';

let multitype: number | boolean;
multitype = 20;
multitype = true;

function product(num1: number, num2?: number): number {
    if (num2) {
        return num1 * num2;
    }
    return num1;
}
console.log("production result: ", product(5, 10));
product(5)
function devide(num1: number, num2?: number): number {
    if (num2) {
        return num1 / num2;
    }
    return num1;
}
devide(10, 5);
console.log("division result: ", devide(5));
function printing(name: string): void {
    console.log("my name is ", name);

}
printing('pradip');
