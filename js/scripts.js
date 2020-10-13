// Initialize library - sync with database if applicable
let myLibrary;
dbLibrary.on("value", snap => {
  if (snap.exists() == true) {
    myLibrary = snap.val()  
    addToTable()
  }
  else {
    myLibrary = [];
  }
})   

// create object constructor
function Book(title, author, pages, hasRead ) {  
    this.title = title
    this.author = author
    this.pages = pages
    if ((hasRead == true) ? this.hasRead = "Read" : this.hasRead = "Not Read");
  }    
    
function addBookToLibrary(title, author, pages, hasRead) {
  newBook = new Book(title, author, pages, hasRead)
  
  // push new book to local library 
  myLibrary.push(newBook);
  
  //update cloud database 
  dbLibrary.update(myLibrary);

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
    let tablePages = document.createElement("p");
    tablePages.textContent = myLibrary[i].pages;
    document.querySelector("#table-container").appendChild(tablePages);
    
    // create and push message if it's been read
    let tableHasRead = document.createElement("h4");
    tableHasRead.textContent = myLibrary[i].hasRead;
    //create container div that will work as the read/unread toggle
    let tableReadToggle = document.createElement("div");
    //set the read class depending on what the user selected
    if ((myLibrary[i].hasRead == "Read") ? tableReadToggle.classList.add("read_toggle-read") : tableReadToggle.classList.add("read_toggle-unread"));
    tableReadToggle.dataset.indexNumber = [i];
    document.querySelector("#table-container").appendChild(tableReadToggle);
    tableReadToggle.appendChild(tableHasRead);
    
    // create and push delete button
    let buttonDelete = document.createElement("button");
    buttonDelete.type = "button";
    buttonDelete.classList.add("button_delete");
    //assign the button with a specific data number for deletion purposes
    buttonDelete.dataset.indexNumber = [i];
    buttonDelete.textContent = "Remove";
    document.querySelector("#table-container").appendChild(buttonDelete);

    
    //add event listener to delete buttons
    buttonDelete.addEventListener("click", () => {
      //delete from library
      let indexNumber = buttonDelete.dataset.indexNumber;
      // remove the book associated with the data attribute - deletes the only book if there is only one
      if ((myLibrary.length > 1) ? myLibrary.splice(indexNumber, indexNumber) : myLibrary.splice(0, 1));

      //update the database
      dbLibrary.set(myLibrary);

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
        
        //update database
        dbLibrary.set(myLibrary);

        //update table
        let tableContainer = document.querySelector("#table-container");

        while (tableContainer.firstChild) {
          tableContainer.removeChild(tableContainer.firstChild);
        }
        //update table
        addToTable(myLibrary);
      }

      else {
        myLibrary[indexNumber].hasRead = "Not Read";
        //update database
        dbLibrary.set(myLibrary);

        //update table
        let tableContainer = document.querySelector("#table-container");

        while (tableContainer.firstChild) {
          tableContainer.removeChild(tableContainer.firstChild);
        }
        //update table
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
  //check if forms have been filled out before doing anything 
  if (inputTitle.value != "" && inputAuthor.value != "" && inputPages.value != "") {
    
    //run addBookToLibrary function using user's input values as the arguments
    addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputHasRead.checked);
    // remove all previous table elements - if any
    let tableContainer = document.querySelector("#table-container");

    while (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
    }

    addToTable(myLibrary);
    // // clear the forms
    inputTitle.value = " ";
    inputAuthor.value = " ";
    inputPages.value = "";
    inputHasRead.value = "Not Read";
  }

  else {
    alert("Please fill out all the book information")
  }

});



