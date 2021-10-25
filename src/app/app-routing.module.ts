import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { ResultsComponent } from './components/results/results.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'review', component: ResultsComponent },
  { path: 'details', component: DetailsComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
