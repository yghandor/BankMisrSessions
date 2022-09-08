import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'NTGGrid',
  templateUrl: './ntggrid.component.html',
  styleUrls: ['./ntggrid.component.scss']
})
export class NTGGridComponent implements OnInit {

  @Input()
  cols ?: any[];
  @Input()
  data ?: any[];

  @ViewChild('dt1')
  dt1: any;

  @Output()
  DeleteRow = new EventEmitter<any>();

  @Output()
  EditRow = new EventEmitter<any>();

  constructor(private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {

  }

  HandleFilter(dt1: any, e: any) {

    dt1.filterGlobal(e.target.value, 'contains')

  }

  exportData() {
    if (this.dt1) {
      this.dt1.exportCSV();
    } else {
      console.error('Grid Not Initialized ');
    }
  }

  confirm(rowData: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //alert('confirmed to delere');
        //console.log(rowData);
        this.DeleteRow.emit(rowData);
      }
    });
  }

  EmitEdit(rowData: any) {
      this.EditRow.emit(rowData);
  }
}
