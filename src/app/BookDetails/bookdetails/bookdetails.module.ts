import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookdetailsRoutingModule } from './bookdetails-routing.module';
import { BookdetailsComponent } from './bookdetails.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SimilarbooksComponent } from '../../similarbooks/similarbooks.component';
// import { NgxImageZoomModule } from 'ngx-image-zoom';

 
@NgModule({
  declarations: [
    BookdetailsComponent,
    SimilarbooksComponent
  ],
  imports: [
    CommonModule,
    BookdetailsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    // NgxImageZoomModule
  ]
})
export class BookdetailsModule { }
