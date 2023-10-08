import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Input() childProduct: Product | undefined;
  @Output() notify = new EventEmitter();


}
