import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { BookService } from '../book.service';
import { Book } from '../book';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {
  bookForm: FormGroup;
  @Input() book: Book;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initForm();

    if (this.route.snapshot.url.join('/') != "books/new")
      this.getBook();
  }

  onSubmit() {
    if (this.book)
      this.bookService.updateBook(this.bookForm.value as Book).subscribe(() => this.location.back());
    else {
      let tmp: Book = this.bookForm.value;
      delete tmp.id;
      this.bookService.addBook(this.bookForm.value as Book).subscribe(() => this.router.navigate(["/"]));
    }
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => {
        this.book = book;
        this.bookForm.patchValue(book);
      });
  }

  private initForm() {
    this.bookForm = this.fb.group({
      id: [''],
      author: ['', Validators.required],
      title: ['', Validators.required],
      issued: ['', Validators.required],
      imgSrc: ['', Validators.required],
    });
  }
}
