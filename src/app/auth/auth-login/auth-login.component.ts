// No arquivo "auth-login.component.ts"
import { Component, OnInit } from '@angular/core';

// Importe as ferramentas do ReactiveFormsModule
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  // Crie uma variável para armazenar o form
  public exampleForm : FormGroup

  // Crie uma variável para armazenar os dados
  public objectData : any = {}

  constructor() {

    // Crie um novo FormGroup com seus FormControls e Validators
    this.exampleForm = new FormGroup({
      name_input: new FormControl('', [Validators.required]),

      email_input: new FormControl('', [Validators.required, Validators.email]),

      age_input: new FormControl(1, [Validators.required , Validators.min(1), Validators.max(120)]),

      gender_input: new FormControl('male', [Validators.required]),

      pt_input: new FormControl(false),

      en_input: new FormControl(false),

      terms_input: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit() { }

  // Função que será chamada pela diretiva (click) no HTML
  myFunction(){

    // Exibindo os dados no console
    console.log("dados", this.exampleForm.value)

    // Salvando os dados em uma variável
    this.objectData = this.exampleForm.value

    // Exibindo se formulário é valido
    console.log("Válido?", this.exampleForm.valid)

    // Exibindo os erros no formulário
    console.log("Erros", this.exampleForm.errors)

    // Exibindo o valor de um campo
    console.log("Valor do campo name_input", this.exampleForm.get("email_input").value)

    // Exibindo se um campo é válido
    console.log("Campo email_input é válido?", this.exampleForm.get("email_input").valid)

    // Exibindo erros de um campo
    console.log("Erros no campo email_input", this.exampleForm.get("email_input").errors)

  }

}
