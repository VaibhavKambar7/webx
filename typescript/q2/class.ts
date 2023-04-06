class Person {
    // public property
    public name: string;
    // protected property
    protected age: number;
    // private property
    private address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // public method
    public introduce(): void {
        console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    }

    // protected method
    protected getAge(): number {
        return this.age;
    }

    // private method
    private getAddress(): string {
        return this.address;
    }
}

// create an instance of the class
const john = new Person("John", 30, "123 Main St");

// access public property outside class
console.log(john.name); // output: John

// error accessing protected property outside class
console.log(john.age); // error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.

// error accessing private property outside class
console.log(john.address); // error: Property 'address' is private and only accessible within class 'Person'.



class Teacher {
    private person: Person;

    constructor(name: string, age: number, address: string) {
        this.person = new Person(name, age, address);
    }

    public introduce(): void {
        this.person.introduce();
    }

    public getAgeFromPerson(): number {
        return this.person.getAge();
    }

    public getAddressFromPerson(): string {
        // return this.person.getAddress(); // error: Property 'getAddress' is private and only accessible within class 'Person'.
        return "Address is private";
    }
}

// create an instance of the non-subclass Teacher class
const Smith = new Teacher("John Smith", 40, "789 Elm St");

// access public property of Person through Teacher class
console.log(Smith.introduce()); // output: My name is John Smith. I am 40 years old.

// access protected method of Person through Teacher class
console.log(Smith.getAgeFromPerson()); // output: 40

// error accessing private method of Person through Teacher class
console.log(Smith.getAddressFromPerson()); // output: Address is private

class Employee extends Person {
    // public property
    public jobTitle: string;

    constructor(name: string, age: number, address: string, jobTitle: string) {
        super(name, age, address);
        this.jobTitle = jobTitle;
    }

    // public method
    public introduce(): void {
        console.log(`My name is ${this.name}. I am ${this.age} years old and work as a ${this.jobTitle}.`);
    }

    // public method that calls protected method of superclass
    public getAgeFromSuper(): number {
        return this.getAge();
    }

    // public method that tries to call private method of superclass
    public getAddressFromSuper(): string {
        // return this.getAddress(); // error: Property 'getAddress' is private and only accessible within class 'Person'.
        return "Address is private";
    }
}

// create an instance of the subclass
const jane = new Employee("Jane", 25, "456 Oak St", "Software Developer");

// access public property of subclass
console.log(jane.jobTitle); // output: Software Developer

// access protected property of superclass through subclass instance
console.log(jane.getAgeFromSuper()); // output: 25

// error accessing private property of superclass through subclass instance
console.log(jane.getAddressFromSuper()); // output: Address is private
