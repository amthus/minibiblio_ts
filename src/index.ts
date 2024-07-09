
import { Library } from './Library';
import { Book } from './Book';

const library = new Library();

function promptUser(): void {
    const action = parseInt(prompt(
        `Select an action:
        1. Add a new book
        2. View all books
        3. Find a book by title
        4. Update a book
        5. Delete a book
        6. Exit`
    ) || '0'); // Default to '0' if prompt returns null

    switch (action) {
        case 1:
            const title = prompt('Enter book title:') || '';
            const author = prompt('Enter book author:') || '';
            const year = parseInt(prompt('Enter book year:') || '0'); // Default to '0' if prompt returns null
            library.addBook(new Book(title, author, year));
            alert('Book added successfully!');
            break;
        case 2:
            const books = library.getBooks();
            alert(`Books in library:\n${books.map(book => `${book.title} by ${book.author}, ${book.year}`).join('\n')}`);
            break;
        case 3:
            const searchTitle = prompt('Enter book title to find:') || '';
            const foundBook = library.findBookByTitle(searchTitle);
            if (foundBook) {
                alert(`Found book: ${foundBook.title} by ${foundBook.author}, ${foundBook.year}`);
            } else {
                alert('Book not found.');
            }
            break;
        case 4:
            const updateTitle = prompt('Enter title of the book to update:') || '';
            const newTitle = prompt('Enter new title (leave blank to keep current):') || undefined;
            const newAuthor = prompt('Enter new author (leave blank to keep current):') || undefined;
            const newYearString = prompt('Enter new year (leave blank to keep current):');
            const newYear = newYearString ? parseInt(newYearString) : undefined;

            const updateResult = library.updateBook(updateTitle, {
                title: newTitle,
                author: newAuthor,
                year: newYear
            });

            if (updateResult) {
                alert('Book updated successfully!');
            } else {
                alert('Book not found.');
            }
            break;
        case 5:
            const deleteTitle = prompt('Enter title of the book to delete:') || '';
            const deleteResult = library.deleteBook(deleteTitle);
            if (deleteResult) {
                alert('Book deleted successfully!');
            } else {
                alert('Book not found.');
            }
            break;
        case 6:
            return;
        default:
            alert('Invalid action. Please try again.');
    }

    promptUser();
}

promptUser();
