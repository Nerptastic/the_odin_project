// Uncategorized JS for The Odin Project

function Book(title, author, pages, read){
  this.title = title,
  this.pages = pages,
  this.author = author,
  this.read = read,
  this.info = function (){
    console.log(`Title: ${this.title}, Pages: ${this.pages}, Author: ${this.author}, Read: ${this.read}`);
  }
}

let lordOfRings = new Book('Lord of Ring', 'J. R. Smith', 500, true);
lordOfRings.info();




function Student(name, grade) {
  this.name = name
  this.grade = grade
}

let nick = new Student('Nicholas', 7);
console.log('Nick is in grade ' + nick.grade)

Student.prototype.sayName = function() {
  console.log(this.name)
}
nick.sayName();

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}


EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("Carl")
carl.sayName()
carl.grade