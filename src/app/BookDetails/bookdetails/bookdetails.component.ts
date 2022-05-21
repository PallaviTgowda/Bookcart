import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookdetailsService } from 'src/app/service/bookdetails.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent implements OnInit {
  id:any;
  data:any;
  message: string = '';
  buttonText: string='Add To Wishlist';
  cart: string='Add To Cart';
  constructor(private route:ActivatedRoute, private service:BookdetailsService) {}
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOne()
  }
  getOne(){
     this.service.getOne(this.id).subscribe(data=>
      {
        this.data=data;
        console.log(this.data)
      })
  }
 
  displayStyle = "none";
  popup() {
    this.displayStyle = "block";
    if(this.buttonText == 'Add To Wishlist'){
    this.message = 'Item added to your wishlist';
    this.buttonText ='Remove From Wishlist'
    }else if(this.buttonText == 'Remove From Wishlist'){
    this.message = 'Item removed from your Wishlist';
    this.buttonText = 'Add To Wishlist'
    }
  }
  modal() {
    this.displayStyle = "block";
    if(this.cart == "Add To Cart"){
      this.message = 'One item added to cart';
    }
  }
  
  closePopup() {
      this.displayStyle = "none";
  }
}
