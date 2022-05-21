import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimilarbooksComponent } from './similarbooks.component';

const routes: Routes = [
  { path: '', component: SimilarbooksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimilarbooksRoutingModule { }
