let myLibrary = [];


function Book(title, author, pages, hasRead ) {  
    this.title = title
    this.author = author
    this.pages = pages
    if ((hasRead == true) ? this.hasRead = "Read" : this.hasRead = "Not read");
    //this.hasRead = hasRead
    this.message = function () {
      let read;
      if ((this.hasRead == true) ? read = "has read" : read = "has not read");
      return (this.title + " by " + this.author + " is " + this.pages + " pages long: " + read);
    }
  
  }    
    
function addBookToLibrary(title, author, pages, hasRead) {
  // do stuff here
  let book1 = new Book("The Hobbit", "Andrew Leach", 242, false);
  let book2 = new Book("The Purge", "Bob Leach", 357, false);
  myLibrary.push(book1);
  myLibrary.push(book2);
}

addBookToLibrary();


// create function pushing books to table 
function addToTable() {
  for (i = 0; i < myLibrary.length; i++) {
    //create and push titles
    let tableTitle = document.createElement("h3");
    tableTitle.textContent = myLibrary[i].title;
    document.querySelector("#title").appendChild(tableTitle);

    // create and push authors
    let tableAuthor = document.createElement("h4");
    tableAuthor.textContent = myLibrary[i].author;
    document.querySelector("#author").appendChild(tableAuthor);

    // create and push pages
    let tablePages = document.createElement("h5");
    tablePages.textContent = myLibrary[i].pages;
    document.querySelector("#pages").appendChild(tablePages);
    
    // create and push message if it's been read
    let tableHasRead = document.createElement("h5");
    tableHasRead.textContent = myLibrary[i].hasRead;
    document.querySelector("#hasRead").appendChild(tableHasRead);
  }
}



