import { Component, OnInit } from '@angular/core';
import { BookdetailsService } from '../service/bookdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books: any =[];
  router: any;
  color:any
  
  constructor(private service:BookdetailsService) { }

  ngOnInit(): void {
    this.getbooks()
  }
  
  getbooks(){
    this.service.getbookdetails().subscribe((response:any)=>{
      this.books = response;
    }
    )}
    
  displayStyle = "none";
  popup() {
    this.displayStyle = "block";
  }
  closePopup() {
      this.displayStyle = "none";
  }

}
