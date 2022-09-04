import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {GlobalStateService} from "../../Common/global-state.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'File',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {label: 'Project'},
          {label: 'Other'},
        ]
      },
        {label: 'Open'},
        {label: 'Quit'}
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      ]
    }
  ];

  constructor(private _state: GlobalStateService) {
  }

  ngOnInit(): void {
  }

  HandleSliderShow($event: MouseEvent) {
    $event.preventDefault();
    this._state.notifyDataChanged('SliderChange', true);
  }
}
