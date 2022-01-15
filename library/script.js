const statusReadPara = document.querySelectorAll('.status-read')
const statusNotReadPara = document.querySelectorAll('.status-not-read')
const addBookButton = document.querySelector('button')
const bookContainer = document.querySelector('.container')

function Book(title, author, pages, rating, readStatus){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.rating = rating;
  this.readStatus = readStatus;

  this.info = function() {
    return `This is ${title}, a book by ${author}. It is ${pages} pages long and it ${readStatus}. It is rated ${rating}/10.`;
  }
}

let myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 350, 8, true)
const ballaBook = new Book("The balla", "J.R.R Ballin", 360, 3, false)

myLibrary.push(theHobbit, ballaBook)

function addBookToLibrary(){
  // Selecting the input element and get their values
  let userTitle = document.getElementById("userTitle").value;
  let userAuthor = document.getElementById("userAuthor").value;
  let userPages = document.getElementById("userPages").value;
  let userRating = document.getElementById("userRating").value;
  let userReadStatus = document.getElementById("userReadStatus").value;

  let userBook = new Book(userTitle, userAuthor, userPages, userRating, userReadStatus)
  myLibrary.push(userBook)
  addBookDiv(userBook)


}

function addBookDiv(Book){

  const newBookDiv = document.createElement('div')
  const newBookTitle = document.createElement('h2')
  const newBookAuthor = document.createElement('p')
  const newBookPages = document.createElement('p')
  const newBookRating = document.createElement('p')
  const newBookStatus = document.createElement('p')

  newBookDiv.append(newBookTitle, newBookAuthor, newBookPages, newBookRating, newBookStatus)

  newBookTitle.textContent = Book.title;
  newBookAuthor.textContent = `by ${Book.author}`
  newBookPages.textContent = `${Book.pages} Pages`
  newBookRating.textContent = `Rating: ${Book.rating}/10`

  newBookDiv.classList.add("book")
  newBookAuthor.classList.add("author")
  newBookPages.classList.add("pages")
  newBookRating.classList.add("rating")
  
  if(Book.readStatus){
    newBookStatus.textContent = "Read"
    newBookStatus.classList.remove("status-not-read")
    newBookStatus.classList.add("status-read")

  } else {
    newBookStatus.textContent = "Not Read"
    newBookStatus.classList.remove("status-read")
    newBookStatus.classList.add("status-not-read")
  }


  bookContainer.prepend(newBookDiv)

}


addBookButton.addEventListener('click', addBookToLibrary)

/* PsuedoCode: 

1. User clicks "Add Book"
2. Form pops up for user input
3. User enters information/status
4. User clicks "Add"
5. Book is added to the DOM
6. User clicks "Click to read"
6. User clicks "Delete book"
7. Book is removed from list 

*/