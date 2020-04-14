import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URI = 'https://gateway.marvel.com:443/v1/public/characters';

@Injectable({ providedIn: 'root' })
export class PhotoService{
    constructor(private http: HttpClient){}

    listCharacters(nameCharacter: string){
        return this.http.get<any>(`${URI}?limit=5&apikey=f0f3234103aa31daafe6eb214244a30a&hash=eaf2c6396159ff17191b0a2dcca19cb8&ts=1585789368`)
    }
}
