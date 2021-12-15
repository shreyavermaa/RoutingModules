import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broadcast-component1',
  templateUrl: './broadcast-component1.component.html',
  styleUrls: ['./broadcast-component1.component.scss']
})
export class BroadcastComponent1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(`HI there`);
    console.log(`Test message for feature fourth`);
  }

}
