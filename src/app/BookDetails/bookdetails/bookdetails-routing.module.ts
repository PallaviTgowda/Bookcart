import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from './bookdetails.component';
import { SimilarbooksComponent } from '../../similarbooks/similarbooks.component';

const routes: Routes = [
  { path: '', component: BookdetailsComponent },
  { path: 'bookdetails/:id', component: BookdetailsComponent },
  { path:'similarbooks', component:SimilarbooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookdetailsRoutingModule { }
