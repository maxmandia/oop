let bookContainer = document.querySelector(".book-container");
let addBook = document.querySelector("button");
let myLibrary = ["the hobbit", "harry potter"];
let main = document.querySelector("main");

function Book(title) {
  this.title = title;
  this.addBook = () => {
    const bookElement = document.createElement("p");
    const node = document.createTextNode(title);
    bookElement.appendChild(node);
    bookContainer.appendChild(bookElement);
  };
}

// function addBookToLibrary() {
//   myLibrary.forEach((book) => {
//     const bookElement = document.createElement("p");
//     const node = document.createTextNode(book);
//     bookElement.appendChild(node);
//     bookContainer.appendChild(bookElement);
//   });
// }

// addBookToLibrary();
addBook.addEventListener("click", () => {
  const formElement = document.createElement("form");
  const authorElement = document.createElement("label");
  const authorInput = document.createElement("input");
  const titleElement = document.createElement("label");
  const titleInput = document.createElement("input");
  const pagesElement = document.createElement("label");
  const pagesInput = document.createElement("input");
  const submitBTN = document.createElement("button");
  titleElement.innerHTML = "title";
  authorElement.innerHTML = "author";
  pagesElement.innerHTML = "pages";
  submitBTN.innerHTML = "add";
  main.appendChild(formElement);
  formElement.appendChild(titleElement);
  formElement.appendChild(titleInput);
  formElement.appendChild(authorElement);
  formElement.appendChild(authorInput);
  formElement.appendChild(pagesElement);
  formElement.appendChild(pagesInput);
  main.appendChild(submitBTN).addEventListener("click", (e) => {
    e.preventDefault();
    const myNewBook = new Book(authorInput.value);
    console.log(myNewBook.title);
    myNewBook.addBook();
  });
});
