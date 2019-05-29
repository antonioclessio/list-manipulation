import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  dataSource: any = [];
  
  updateItens = (itens: any) => {
    this.dataSource = itens;
  }

}
