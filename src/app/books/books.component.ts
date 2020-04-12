import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookService } from "../book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.bookService.addBook({ title } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }
}
