import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookdetailsService } from './service/bookdetails.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookcart';
  router: any;

  constructor(router:Router) {}

  ngOnInit(): void {
  }
}
