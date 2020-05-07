import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input()
  public user : any = {}


  constructor() {
    console.log(this.user)
  }

  ngOnInit() {
    console.log("carregado",this.user)
  }

}
