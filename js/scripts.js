let myLibrary = [];
let newBook;

// create object constructor
function Book(title, author, pages, hasRead ) {  
    this.title = title
    this.author = author
    this.pages = pages
    if ((hasRead == true) ? this.hasRead = "Read" : this.hasRead = "Not Read");
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
    document.querySelector("#table-container").appendChild(tableTitle);

    // create and push authors
    let tableAuthor = document.createElement("h4");
    tableAuthor.textContent = myLibrary[i].author;
    document.querySelector("#table-container").appendChild(tableAuthor);

    // create and push pages
    let tablePages = document.createElement("h5");
    tablePages.textContent = myLibrary[i].pages;
    document.querySelector("#table-container").appendChild(tablePages);
    
    // create and push message if it's been read
    let tableHasRead = document.createElement("h5");
    tableHasRead.textContent = myLibrary[i].hasRead;
    //create container div that will work as the read/unread toggle
    let tableReadToggle = document.createElement("div");
    tableReadToggle.classList.add("read-toggle");
    tableReadToggle.dataset.indexNumber = [i];
    document.querySelector("#table-container").appendChild(tableReadToggle);
    tableReadToggle.appendChild(tableHasRead);

    //create toggle to allow user to change the book's read status
    
    // create and push delete button
    let buttonDelete = document.createElement("button");
    buttonDelete.type = "button";
    buttonDelete.classList.add("button_delete");
    //assign the button with a specific data number for deletion purposes
    buttonDelete.dataset.indexNumber = [i];
    buttonDelete.textContent = "Remove from Library";
    document.querySelector("#table-container").appendChild(buttonDelete);

    
    //add event listener to delete buttons
    buttonDelete.addEventListener("click", () => {
      //delete from library
      let indexNumber = buttonDelete.dataset.indexNumber;
      // remove the book associated with the data attribute - deletes the only book if there is only one
      if ((myLibrary.length > 1) ? myLibrary.splice(indexNumber, indexNumber) : myLibrary.splice(0, 1));
      
      
      //rebuild the table and library with new data attributes for remaining buttons
      let tableContainer = document.querySelector("#table-container");

      while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
      }
    
      addToTable(myLibrary);
    })

    //add event listener to the read toggle div
    tableReadToggle.addEventListener("click", () => {
      let indexNumber = tableReadToggle.dataset.indexNumber;
      //change read status on click
      if (myLibrary[indexNumber].hasRead == "Not Read") {
        myLibrary[indexNumber].hasRead = "Read";

        //update table
        let tableContainer = document.querySelector("#table-container");

        while (tableContainer.firstChild) {
          tableContainer.removeChild(tableContainer.firstChild);
        }
  
        addToTable(myLibrary);
      }

      else {
        myLibrary[indexNumber].hasRead = "Not Read";

        //update table
        let tableContainer = document.querySelector("#table-container");

        while (tableContainer.firstChild) {
          tableContainer.removeChild(tableContainer.firstChild);
        }
  
        addToTable(myLibrary);
        
      }

    })
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
  let tableContainer = document.querySelector("#table-container");

  while (tableContainer.firstChild) {
    tableContainer.removeChild(tableContainer.firstChild);
  }

  addToTable(myLibrary);
});



