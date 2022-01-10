interface objectType {
    title: string,
    status: boolean,
    id: number
}
interface name {
    firstName: string,
    lastName?: string
}

function fullName(obj: name): string {
    if (obj.lastName) {
        return obj.firstName + " " + obj.lastName;
    }
    else {
        return obj.firstName;
    }

}
console.log(fullName({ firstName: "John", lastName: "doe" }))
console.log(fullName({ firstName: "John" }));

interface Address {
    houseNumber: number,
    street: string,
    city: string,
    state: string,
    postalCode: number,
    country: string
}


interface PersonDetails {
    Prefix?: string,
    phones: Array<number>,
    adresses: Array<string>,
    email?: string,
    firstName: string,
    middlename?: string,
    lastName: string,
}

let arr: any = [];
function createPhoneBook(personDetails: PersonDetails) {
    arr.push(personDetails);
}
let obj: PersonDetails = {
    Prefix: "Mr",
    phones: [1, 2, 3, 4, 5, 6, 7],
    adresses: ["john", "doe", "hi", "world"],
    email: "johndoe@gmail.com",
    firstName: "pradip",
    lastName: "mandal",
}
createPhoneBook(obj)
console.log(arr);
