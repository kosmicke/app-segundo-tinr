import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsTopicsService {

  private apiUrl : string = "https://api-segundo-tinr.herokuapp.com"

  constructor(
    private httpClient : HttpClient
  ) { }

  getList() : Promise<any>{
    let endpoint = `${this.apiUrl}/topics`
    return this.httpClient.get(endpoint).toPromise()
  }

  getById(topicId) : Promise<any>{
    let endpoint = `${this.apiUrl}/topics/${topicId}`
    return this.httpClient.get(endpoint).toPromise()
  }


}
