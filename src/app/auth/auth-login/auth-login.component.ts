// No arquivo "auth-login.component.ts"
import { Component, OnInit } from '@angular/core';

// Importe as ferramentas do ReactiveFormsModule
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  // Crie uma variável para armazenar o form
  public loginForm : FormGroup

  // Crie uma variável para armazenar os dados
  public data : any = {}

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    // Crie um novo FormGroup com seus FormControls e Validators
    this.loginForm = new FormGroup({
      nickName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })

  }

  ngOnInit() { }

  // Função que será chamada pela diretiva (click) no HTML
  async sendLogin(){

    // Exibe um alerta para caso o formulário não esteja válido
    if(!this.loginForm.valid){
      alert("Preencha os campos corretamente.");

    }else{

      try {
        let formValue = this.loginForm.value;
        let res = await this.authService.login(formValue)

        this.authService.setLoggedUser(res.data)
        console.log("res.data", res.data)
        this.router.navigate(['/topics'])

      } catch (error) {
        console.log(error)
        alert("Não foi possível efeturar login. Verifique os dados e tente novamente.")
      }

    }

  }

  // Função que verifica erro em um campo
  getFieldError(formControlName){

    // Recupera o campo pelo seu nome
    let control = this.loginForm.get(formControlName)

    // Retorna false caso o campo não foi encontrado
    if(!control) return false;

    // Retorna false caso campo ainda não sofreu interação
    if(control.untouched) return false;

    // Retorna false caso campo está válido
    if(control.valid) return false

    // Retorna mensagem para caso validação de required
    if(control.hasError("required")){
      return "Este campo é obrigatório."
    }

    // Retorna mensagem para caso validação de minLength
    if(control.hasError("minlength")){
      let minlength = control.getError("minlength")
      return "O mínimo de caracteres para este campo é " + minlength.requiredLength + "."
    }

    // Caso campo é inválido mas erro não foi capturado acima
    return "Campo inválido."

  }

}
