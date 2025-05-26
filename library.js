export class Book {
    #id = crypto.randomUUID();

    constructor(title, author, pages, read=false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

export class Library {
    #books = [];

    get books() {
        return this.#books;
    }

    AddBookToLibrary = (title, author, pages, read=false) => {
        const book = new Book(title, author, pages, read);
        this.#books.push(book);
    }

    RemoveBook = (index) => {
        this.#books.splice(index, 1);
    }
}