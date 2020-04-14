import { NotFoundComponent } from './error/not-found/not-found.component';
import { PhotoSearchComponent } from './photos/photo-search/photo-search.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'photos', component: PhotosListComponent},
  {path: 'photos/search', component: PhotoSearchComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
