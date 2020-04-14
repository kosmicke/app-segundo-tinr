import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoSearchComponent } from './photo-search/photo-search.component';
@NgModule({
    declarations: [PhotoComponent, PhotosListComponent, PhotoSearchComponent],
    imports: [HttpClientModule, CommonModule]
})

export class PhotosModule{}