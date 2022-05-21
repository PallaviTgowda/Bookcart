import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookdetailsService } from '../service/bookdetails.service';


@Component({
  selector: 'app-similarbooks',
  templateUrl: './similarbooks.component.html',
  styleUrls: ['./similarbooks.component.css']
})
export class SimilarbooksComponent implements OnInit {
  id:any;
  data:any=[];

  constructor(private route:ActivatedRoute, private service:BookdetailsService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getSimilarBook()
  }

  getSimilarBook(){
    this.service.getSimilarBook(this.id).subscribe(data=>
  {
        console.log(data);
        this.data=data
      })
  }
  displayStyle = "none";
  popup() {
    this.displayStyle = "block";
  }
  closePopup() {
      this.displayStyle = "none";
  }
}
