import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-alerts',
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.css']
})
export class ProductsAlertsComponent implements OnInit {
  @Input() product:any
  @Output() notify = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  handleClick(){
     this.notify.emit(`Hey this is the letest version go of ${this.product.name} go check it out.`)
  }

}