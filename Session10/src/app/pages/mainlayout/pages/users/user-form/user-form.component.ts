import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {


  @Input()
  RowData ?: any;

  @Input()
  SpinButton = false;

  @Output()
  SaveButtonClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  HandleSaveButtonClick($event: MouseEvent) {
    this.SaveButtonClick.emit($event);
  }
}
