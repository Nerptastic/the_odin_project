// 1. Get the book from the user

// 2. Assign the book an ID 

// 3. Add the book to the library and the DOM

// 4. Find the book with matching ID

// 5. Delete the book with the matching ID

//Collect Elements
let addButton = document.getElementById('addButton');
let booksContainer = document.getElementById('bookContainer');

// Library Logic

let libraryBooks = [];

function Book(bookId, title, author, pages, read) {
  this.bookId = bookId,
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

function createBook(bookId, title, author, pages, read){
  libraryBooks.push(new Book(bookId, title, author, pages, read));
  bookCount += 1;
}

// Form Submit
function popupSubmit(){
  let bookId = bookCount;
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;

  createBook(bookId, title, author, pages, read);

  console.log(libraryBooks);
  updateDOM();
};

const toggleRead = (e) => {
  if (e.target.classList == 'read'){
    e.target.classList.remove('read');
    e.target.classList.add('not-read');
    e.target.textContent = "Not Read";
  } else {
    e.target.classList.remove('not-read');
    e.target.classList.add('read');
    e.target.textContent = "Read";
  }
}

const removeBook = (e) => {
  e.target.parentNode.parentNode.remove();
  let bookID = e.id;
  bookID = Number(bookID);
  libraryBooks.splice(bookID, 1);
  console.log('remove was clicked');
  console.log(libraryBooks);

}

function createBookDiv(Book, bookCount){
  const bookCard = document.createElement('div');
  const title = document.createElement('h2');
  const author = document.createElement('h3');
  const pages = document.createElement('p');
  const buttonGroup = document.createElement('div');
  const readButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  bookCard.setAttribute("id", `${bookCount}`);

  bookCard.classList.add('book-card');
  buttonGroup.classList.add('card-buttons');
  readButton.classList.add('read');
  deleteButton.classList.add('delete');
  readButton.onclick = toggleRead;
  deleteButton.onclick = removeBook;

  title.textContent = `"${Book.title}"`;
  author.textContent = Book.author;
  pages.textContent = `${Book.pages} pages`;
  deleteButton.textContent = 'Delete';
  readButton.textContent = 'Read';

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  buttonGroup.appendChild(readButton);
  buttonGroup.appendChild(deleteButton);
  bookCard.appendChild(buttonGroup);
  booksContainer.appendChild(bookCard);
};

function updateDOM(){
  booksContainer.textContent= '';
  let bookCount = 0;
  for (let Book in libraryBooks){ 
    createBookDiv(libraryBooks[Book], bookCount);
    bookCount++;
  }
}

// Popup Style Functions

function openPopup() {
  document.getElementById("addBookPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("addBookPopup").style.display = "none";
}

function addBlur() {
  document.getElementById("container").classList.add("blur");
}

function removeBlur() {
  document.getElementById("container").classList.remove("blur");
}

// Filler Books

let lordOfRings = new Book(0, "Lord of the Rings", "J. R. R Tolkien", 1050, true);
let bladeRunner = new Book(1, "Blade Runner", "Phillip K. Dick", 760, false);
let samIAm = new Book(2, "Sam I Am", "Green Eggs Hamm", 15, true);
libraryBooks.push(lordOfRings, bladeRunner, samIAm);
let bookCount = 3;

console.log(libraryBooks)
updateDOM();
