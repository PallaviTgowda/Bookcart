import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimilarbooksRoutingModule } from './similarbooks-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SimilarbooksComponent } from './similarbooks.component';


@NgModule({
  declarations: [
    SimilarbooksComponent
  ],
  imports: [
    CommonModule,
    SimilarbooksRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule 
  ]
})
export class SimilarbooksModule { }
