import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  title = 'Mike';
  photos: Photo[] = [];

  constructor(private photoService: PhotoService){}

  ngOnInit() {

    this.photoService.listCharacters('Spider-Man')
    .subscribe((elemento: any) => this.photos = elemento.data.results.map((personagem: any) => ({
        id:  personagem.id,
        name: personagem.name,
        description: personagem.description,
        url: `${personagem.thumbnail.path}.${personagem.thumbnail.extension}`
    })))
  }

}
