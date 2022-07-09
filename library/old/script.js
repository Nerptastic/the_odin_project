const statusReadPara = document.querySelectorAll('.status-read')
const statusNotReadPara = document.querySelectorAll('.status-not-read')
const addBookButton = document.querySelector('.add-button')
const bookContainer = document.querySelector('.container')
const deleteButton = document.querySelectorAll('.delete-button')

// Book Class
class Book {
  constructor(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;

}
}

// UI Class
class BookInterface {
  static deleteBook = function(element) {
    if (element.classList.contains("delete-button")) {
      element.parentElement.parentElement.remove();
    }
  }
  static changeReadStatus = function(element) {
    if (element.classList.contains("read-button") && (element.textContent === 'Read')) {
      element.style.backgroundColor = "rgb(171, 127, 127)";
      element.textContent = 'Not Read'
      console.log("Running changeReadStatus to READ")
    } else if (element.classList.contains("read-button") && (element.textContent = 'Not Read')) {
      element.style.backgroundColor = "rgb(127, 171, 127)";
      element.textContent = 'Read'
      console.log("Running changeReadStatus to Not Read")
    }
  }
}

let myLibrary = [];

// Pushes the initial books to the library
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 350, true)
const theStand = new Book("The Stand", "Stephen King", 823, true)
const theBible = new Book("The Bible", "Jesus Christ", 1247, false)

myLibrary.push(theHobbit, theBible, theStand)


//Adds the book
function addBookToLibrary(){
  // Selecting the input element and get their values
  let userTitle = document.getElementById("userTitle").value;
  let userAuthor = document.getElementById("userAuthor").value;
  let userPages = document.getElementById("userPages").value;

  if (userTitle == '') {
    alert("Title must be present")
    return
  } else if (userAuthor == '') {
    alert("Authors do exist for a reason")
    return
  } else if (userPages == '') {
    alert("Pages are generally a number...")
    return
  } else if (userPages > 1000000 || userPages <= 0) {
    alert("That's not a real amount of pages, man...")
    return
  }


  let userBook = new Book(userTitle, userAuthor, userPages)
  myLibrary.push(userBook)
  addBookDiv(userBook)
  clearFields()
}

//Creates a new DOM element with users book info and styling
function addBookDiv(Book){
  const newBookDiv = document.createElement('div')
  const newBookTitle = document.createElement('h2')
  const newBookAuthor = document.createElement('p')
  const newBookPages = document.createElement('p')
  const newBookButtonDiv = document.createElement('div')
  const newBookReadButton = document.createElement('button')
  const newBookDeleteButton = document.createElement('button')

  newBookDiv.append(newBookTitle, newBookAuthor, newBookPages, newBookButtonDiv)
  newBookButtonDiv.append(newBookReadButton, newBookDeleteButton)

  newBookTitle.textContent = Book.title;
  newBookAuthor.textContent = `by ${Book.author}`
  newBookPages.textContent = `${Book.pages} Pages`

  newBookDiv.classList.add("book")
  newBookAuthor.classList.add("author")
  newBookPages.classList.add("pages")
  newBookButtonDiv.classList.add("buttons")
  newBookReadButton.classList.add("read-button")
  newBookDeleteButton.classList.add("delete-button")


  newBookReadButton.textContent = "Read"
  newBookDeleteButton.textContent = "Delete"
  
  bookContainer.prepend(newBookDiv)
}

// Clears the fields after a book is added
function clearFields(){
  document.getElementById('userTitle').value = '';
  document.getElementById('userAuthor').value = '';
  document.getElementById('userPages').value = '';
}

// Selects the add button and adds book to library
addBookButton.addEventListener('click', addBookToLibrary)

// Removes book when delete is pressed
document.querySelector('.container').addEventListener('click', (e) => {
    BookInterface.deleteBook(e.target)
});

document.querySelector('.container').addEventListener('click', (e) => {
  BookInterface.changeReadStatus(e.target)
});




addBookDiv(theHobbit);
addBookDiv(theBible);
addBookDiv(theStand);