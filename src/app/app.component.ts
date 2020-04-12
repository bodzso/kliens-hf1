import { Component } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kliensalkalmazások 1. HF';
  activeId = 1;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case "/books":
            this.activeId = 1;
            break;
          case "/dashboard":
            this.activeId = 2;
            break;
          case "/books/new":
            this.activeId = 3;
            break;
          default:
            this.activeId = 1;
            break;
        }
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
}
