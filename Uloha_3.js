/* Parent class Person*/
class Person {
    constructor(name, surname, age, gender) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        if (gender === 'M' || gender === 'F') {
            this.gender = gender;
        }
        else {
            console.log("Zadajte správne pohlavie");
            return;
        }
    }

    Salutation(gender) {
        if (this.gender === 'M') {
            return ("Pán");
        }
        else if (this.gender === 'F') {
            return "Pani";
        }
    }
    Greeting() {
        console.log(("Dobrý deň, volám sa ") + this.Salutation() + (" ") + (this.surname) + (" ") + (this.name));
    }
}

/*Child class Teacher*/
class Teacher extends Person {
    constructor(name, surname, gender, subject) {
        super(name, surname, gender);
        this.subject = subject;
        this.myStudents = [];
    }

    Greeting() {
        console.log(("Dobrý deň, volám sa ") + this.Salutation() + (" ") + (this.surname) + (" ") + (this.name) + (" a budem Vás učiť ") + (this.subject));
    }
    AddStudent(value) {
        this.myStudents.push(value);
    }
    PickRandomStudent() {
        console.log(this.myStudents[Math.floor(Math.random() * (this.myStudents.length))]);
    }
}

/*Child class Student*/
class Student extends Person {
    constructor(name, surname) {
        super(name, surname);
        this.subjects = [];
    }

    Greeting() {
        console.log(("Ahoj, som študent a volám sa ") + (" ") + (this.surname) + (" ") + (this.name));
    }
    AddSubject(value) {
        this.myStudents.push(value);
    }
}


let Person1 = new Person("Mark", "Wohlberg", 'M');
Person1.Greeting();

let Teacher1 = new Teacher("Patrik", "Jason", "M", "Informatics");
Teacher1.Greeting();
Teacher1.AddStudent("Ugova");
Teacher1.AddStudent("Ugova2");
Teacher1.PickRandomStudent();

let Student1 = new Student("Maria", "Ugova");
Student1.Greeting();
