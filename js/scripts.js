let myLibrary = [];
let newBook;

// create object constructor
function Book(title, author, pages, hasRead ) {  
    this.title = title
    this.author = author
    this.pages = pages
    if ((hasRead == true) ? this.hasRead = "Read" : this.hasRead = "Not read");
    this.message = function () {
      let read;
      if ((this.hasRead == true) ? read = "has read" : read = "has not read");
      return (this.title + " by " + this.author + " is " + this.pages + " pages long: " + read);
    }
  
  }    
    
function addBookToLibrary(title, author, pages, hasRead) {
  // do stuff here
  newBook = new Book(title, author, pages, hasRead)

  myLibrary.push(newBook);

}


// create function pushing books to table 
function addToTable() {
  //push the new book to library

  for (i = 0; i < myLibrary.length; i++) {
    //create and push titles
    let tableTitle = document.createElement("h3");
    tableTitle.textContent = myLibrary[i].title;
    document.querySelector("#table_title").appendChild(tableTitle);

    // create and push authors
    let tableAuthor = document.createElement("h4");
    tableAuthor.textContent = myLibrary[i].author;
    document.querySelector("#table_author").appendChild(tableAuthor);

    // create and push pages
    let tablePages = document.createElement("h5");
    tablePages.textContent = myLibrary[i].pages;
    document.querySelector("#table_pages").appendChild(tablePages);
    
    // create and push message if it's been read
    let tableHasRead = document.createElement("h5");
    tableHasRead.textContent = myLibrary[i].hasRead;
    document.querySelector("#table_hasRead").appendChild(tableHasRead);
  }
}

// write function to submit a new book
const newBookButton = document.querySelector("#button_add-book");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputHasRead = document.querySelector("#read");

newBookButton.addEventListener("click", () => {
  //run addBookToLibrary function using user's input values as the arguments
  addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputHasRead.checked);
  // remove all previous table elements - if any
  if (document.querySelector("#table_title").childElementCount > 0) {
    document.querySelector("#table_title").textContent = "";
    document.querySelector("#table_author").textContent = "";
    document.querySelector("#table_pages").textContent = "";
    document.querySelector("#table_hasRead").textContent = "";
  }
  addToTable(myLibrary);
})



