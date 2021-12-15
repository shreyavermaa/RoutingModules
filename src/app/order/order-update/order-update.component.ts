import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss']
})
export class OrderUpdateComponent implements OnInit {
  id: string = ''
  query: string = ''
  f: string | null= ''

  constructor(private route: ActivatedRoute) {
    // console.log(this.route);
    this.route.params.subscribe(
      (param) => {
        // console.log(param);
        this.id = param['id']
        
      }
    )
    this.route.queryParams.subscribe(
      (param) => {
        this.query = param['query']
      }
    )
    this.route.fragment.subscribe(
    (param) => {
      console.log(param)
      this.f = param;
      // this.f = param['f']
    
    }
    )
   }

  ngOnInit(): void {
  }

}
