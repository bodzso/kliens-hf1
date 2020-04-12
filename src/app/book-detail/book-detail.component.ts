import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Book } from '../book';
import { BookService } from "../book.service";
import { DeleteModalComponent } from "../delete-modal/delete-modal.component";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => {
        this.book = book;
      });
  }

  delete(book: Book): void {
    this.bookService.deleteBook(book).subscribe();
    this.router.navigate(["/books"]);
  }

  openDeleteModal(book: Book): void {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.book = book;
    modalRef.result.then((result) => {
      this.delete(book);
    });
  }
}
