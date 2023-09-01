class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.score = [];
    this.tardies = 0;
  }

  fullName() {
    return `Your full name is ${this.firstName}, ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;

    if (this.tardies > 3) {
      return "YOUR ARE EXPELLED!!!";
    }
    return `${this.firstName} ${this.lastName} is late ${this.tardies} times.`;
  }

  addScore(score) {
    this.score.push(score);
    return `${this.firstName} ${this.lastName} score is ${this.score}`;
  }

  averageScore() {
    let avgScore = this.score.reduce((a, b) => a + b);
    return avgScore / this.score.length;
  }

  static test() {
    return "This is a test made. Should be called on Class. Not the intance of the Class.";
  }
}

let student1 = new Student("Nishanth", "Namana", 3);

console.log(student1.fullName());

console.log(student1.addScore(97));
console.log(student1.addScore(89));
console.log(student1.averageScore());

console.log(student1.markLate());
console.log(student1.markLate());
console.log(student1.markLate());
console.log(student1.markLate());

console.log(Student.test());
