import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-itens',
  templateUrl: './list-itens.component.html',
  styleUrls: ['./list-itens.component.sass']
})
export class ListItensComponent {

  dataSource: any = [];
  selectedDataSource: any = [];

  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.dataSource = [
      { Id: 1, Description: 'Value 1' },
      { Id: 2, Description: 'Value 2' },
      { Id: 3, Description: 'Value 3' },
      { Id: 4, Description: 'Value 4' },
      { Id: 5, Description: 'Value 5' },
      { Id: 6, Description: 'Value 6' },
      { Id: 7, Description: 'Value 7' },
      { Id: 8, Description: 'Value 8' },
      { Id: 9, Description: 'Value 9' },
      { Id: 10, Description: 'Value 10' }
    ];
  }

  addItem = (e: any) => {
    let dataItem = this.dataSource.find(item => item.Id === parseInt(e, null));
    if (!dataItem) { alert('Select one item'); return; }

    this.selectedDataSource.push(dataItem);

    this.update.emit(this.selectedDataSource);
  }

}
