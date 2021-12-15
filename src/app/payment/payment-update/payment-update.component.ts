import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-update',
  templateUrl: './payment-update.component.html',
  styleUrls: ['./payment-update.component.scss']
})
export class PaymentUpdateComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute) { 
    console.log(this.route);
    this.route.params.subscribe(
      (param) => {
        console.log(param);
        this.id = param['id'];

      }
    )
  }

  ngOnInit(): void {
  }

}
