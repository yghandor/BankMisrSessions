import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displaySlider: boolean = false;

  items: MenuItem[] = [
    {label: 'home',icon : 'pi pi-home',routerLink : 'home'
      ,command : event => this.displaySlider = false},
    {label: 'Calculator',icon : 'pi pi-tablet',routerLink : 'calc'
      ,command : event => this.displaySlider = false
    },
    {label: 'Add Order',icon : 'pi pi-euro',routerLink : 'order'
      ,command : event => this.displaySlider = false
    },
    {label: 'About',icon : 'pi pi-amazon',routerLink : 'about'
      ,command : event => this.displaySlider = false
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

  ShowSlider(e: MouseEvent) {
    e.preventDefault();
    this.displaySlider = !this.displaySlider;
  }
}
