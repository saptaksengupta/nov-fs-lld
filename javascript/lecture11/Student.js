import {User} from "./User.js";

class Student extends User {

    constructor(firstName, lastName) {
        super(true);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printName() {
        console.log(`Full Name is: ${this.firstName} ${this.lastName}`);
    }
}

export default Student;