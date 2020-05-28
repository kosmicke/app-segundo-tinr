// No arquivo auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl : string = "https://kosmic-forum-api.herokuapp.com"

  constructor(
    private httpClient : HttpClient
  ) { }

  // Função que efetua o login
  login(data) : Promise<any>{
    let endpoint = `${this.apiUrl}/auth/sign-in`
    return this.httpClient.post(endpoint, data).toPromise()
  }

  // Função para salvar os dados do usuário logado
  setLoggedUser(userData){
    try {
      let userDataString = JSON.stringify(userData);
      localStorage.setItem('loggedUser', userDataString);
    } catch (error) {
      console.log(error)
    }
  }

  // Função para recuperar os dados do usuário logado
  getLoggedUser(){
    try {
      let userDataString = localStorage.getItem('loggedUser');
      let userData = JSON.parse(userDataString)
      return userData;
    } catch (error) {
      console.log(error)
      return null;
    }
  }

  clearStorate(){
    localStorage.clear()
  }

}
