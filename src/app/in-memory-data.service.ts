import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books: Book[] = [
      { id: 10, author: "Druzsin József", title: "A Balaton keleti medencéje", imgSrc: "https://mek.oszk.hu/20400/20472/borito.jpg", issued: "2020" },
      { id: 11, author: "Pintér István", title: "A vidám pokol" , imgSrc: "https://mek.oszk.hu/20400/20470/borito.jpg", issued: "2020"},
      { id: 12, author: "T. Igor Csaba", title: "Három évig király", imgSrc: "https://mek.oszk.hu/20400/20465/borito.jpg", issued: "2020" },
      { id: 13, author: "Verók Tünde", title: "Te döntesz!", imgSrc: "https://mek.oszk.hu/20400/20464/borito.jpg", issued: "2020" },
      { id: 14, author: "August Schrader", title: "Elégtétel", imgSrc: "https://mek.oszk.hu/20400/20476/borito.jpg", issued: "2020" },
      { id: 15, author: "Ágner Lajos", title: "Ferenczy Teréz emlékezete", imgSrc: "https://mek.oszk.hu/20300/20339/borito.jpg", issued: "1904" },
      { id: 16, author: "Kántás Balázs", title: "A fekete hadsereg", imgSrc: "https://mek.oszk.hu/20400/20475/borito.jpg", issued: "2020" },
      { id: 17, author: "Madách Imre", title: "Az ember tragédiája", imgSrc: "https://mek.oszk.hu/14100/14133/borito.jpg", issued: "1921"},
      { id: 18, author: "Nyikolaj Vasziljevics Gogol", title: "A köpönyeg", imgSrc: "https://mek.oszk.hu/00300/00397/borito.jpg", issued: "1987"},
      { id: 19, author: "Móricz Zsigmond", title: "Az Isten háta mögött", imgSrc: "https://mek.oszk.hu/01400/01435/borito.jpg", issued: "1984"},
    ];
    return { books };
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}