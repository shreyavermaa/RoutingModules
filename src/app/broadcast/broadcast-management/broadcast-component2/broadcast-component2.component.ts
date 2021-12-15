import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-broadcast-component2',
  templateUrl: './broadcast-component2.component.html',
  styleUrls: ['./broadcast-component2.component.scss']
})
export class BroadcastComponent2Component implements OnInit {
  id: string = ''

  constructor(private route: ActivatedRoute)  {
    // console.log(route)
    this.route.params.subscribe(
      (params) => {
        // console.log(params)
        this.id = params['id']
      }
    )
    
   }

  ngOnInit(): void {
  }

}
