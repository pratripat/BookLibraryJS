const myLibrary = [];

function Book(title, author, pages, read=false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function AddBookToLibrary(title, author, pages, read=false) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

AddBookToLibrary('Great journey of prat', 'prat', 10, true);
AddBookToLibrary('Some story', 'someone', 100, false);

function DisplayBooks() {
    const container = document.getElementById("book-container");
    container.innerHTML = ""; // clear the container before rendering anything 

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        card.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <label><input type="checkbox" id="book-read-checkbox" name="Read" ${book.read ? "checked" : null}> Read</label>
        `;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove book";
        removeButton.classList.add("remove-book-button");

        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            UpdateDisplay();
        });

        card.appendChild(removeButton);

        container.appendChild(card);
    });
}

function DisplayAddButton() {
    container = document.getElementById("book-container");

    const button = document.createElement("button");
    button.innerHTML = `
        <h2>Add Book</h2>
    `;
    button.classList.add("add-book-button");
    button.addEventListener("click", AddBook); // run the AddBook() function on button click 

    container.appendChild(button);
}

function UpdateForm() {
    const form = document.getElementById("book-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault() // basically not reload the page

        const title = document.getElementById("book-title").value;
        const author = document.getElementById("book-author").value;
        const pages = parseInt(document.getElementById("book-pages").value, 10);
        const read = document.getElementById("book-read").checked;

        AddBookToLibrary(title, author, pages, read);
        UpdateDisplay() // re-render the books

        e.target.reset(); // clear the form
        e.target.style.display = "none";
    });
}

function AddBook() {
    const form = document.getElementById("book-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
}

function UpdateDisplay() {
    DisplayBooks();
    DisplayAddButton();
}

UpdateDisplay();
UpdateForm();