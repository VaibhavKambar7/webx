var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // public method
    Person.prototype.introduce = function () {
        console.log("My name is ".concat(this.name, ". I am ").concat(this.age, " years old."));
    };
    // protected method
    Person.prototype.getAge = function () {
        return this.age;
    };
    // private method
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
// create an instance of the class
var john = new Person("John", 30, "123 Main St");
// access public property outside class
console.log(john.name); // output: John
// error accessing protected property outside class
console.log(john.age); // error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
// error accessing private property outside class
console.log(john.address); // error: Property 'address' is private and only accessible within class 'Person'.
var Teacher = /** @class */ (function () {
    function Teacher(name, age, address) {
        this.person = new Person(name, age, address);
    }
    Teacher.prototype.introduce = function () {
        this.person.introduce();
    };
    Teacher.prototype.getAgeFromPerson = function () {
        return this.person.getAge();
    };
    Teacher.prototype.getAddressFromPerson = function () {
        // return this.person.getAddress(); // error: Property 'getAddress' is private and only accessible within class 'Person'.
        return "Address is private";
    };
    return Teacher;
}());
// create an instance of the non-subclass Teacher class
var Smith = new Teacher("John Smith", 40, "789 Elm St");
// access public property of Person through Teacher class
console.log(Smith.introduce()); // output: My name is John Smith. I am 40 years old.
// access protected method of Person through Teacher class
console.log(Smith.getAgeFromPerson()); // output: 40
// error accessing private method of Person through Teacher class
console.log(Smith.getAddressFromPerson()); // output: Address is private
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, address, jobTitle) {
        var _this = _super.call(this, name, age, address) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    // public method
    Employee.prototype.introduce = function () {
        console.log("My name is ".concat(this.name, ". I am ").concat(this.age, " years old and work as a ").concat(this.jobTitle, "."));
    };
    // public method that calls protected method of superclass
    Employee.prototype.getAgeFromSuper = function () {
        return this.getAge();
    };
    // public method that tries to call private method of superclass
    Employee.prototype.getAddressFromSuper = function () {
        // return this.getAddress(); // error: Property 'getAddress' is private and only accessible within class 'Person'.
        return "Address is private";
    };
    return Employee;
}(Person));
// create an instance of the subclass
var jane = new Employee("Jane", 25, "456 Oak St", "Software Developer");
// access public property of subclass
console.log(jane.jobTitle); // output: Software Developer
// access protected property of superclass through subclass instance
console.log(jane.getAgeFromSuper()); // output: 25
// error accessing private property of superclass through subclass instance
console.log(jane.getAddressFromSuper()); // output: Address is private
