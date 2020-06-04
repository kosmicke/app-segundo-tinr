// No arquivo "alert.component.ts"
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  public header : string = "";

  @Output()
  public onInteract : EventEmitter<any> = new EventEmitter()

  public status : boolean = false;

  constructor() {

  }

  ngOnInit() {}

  // Função para quando o botão cancelar for clicado:
  private cancelClicked(){
    this.onInteract.emit(false)
  }

  // Função para quando o botão confirmar for clicado:
  private confirmClicked(){
    this.onInteract.emit(true)
  }

  setStatus(newStatus){
    this.status = newStatus
  }


}
