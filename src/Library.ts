
import { Book } from './Book';

export class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    getBooks(): Book[] {
        return this.books;
    }

    findBookByTitle(title: string): Book | undefined {
        return this.books.find(book => book.title === title);
    }

    updateBook(title: string, newDetails: Partial<Book>): boolean {
        const book = this.findBookByTitle(title);
        if (book) {
            book.title = newDetails.title ?? book.title;
            book.author = newDetails.author ?? book.author;
            book.year = newDetails.year ?? book.year;
            return true;
        }
        return false;
    }

    deleteBook(title: string): boolean {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
}
