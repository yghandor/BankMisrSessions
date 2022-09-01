import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input()
  price: number = 78.4;

  @Output()
  priceChange = new EventEmitter<number>();

  q: number = 45;

  constructor() { }

  ngOnInit(): void {
  }


}
