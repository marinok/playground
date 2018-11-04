import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-night-sky-demo',
  templateUrl: './night-sky-demo.component.html',
  styleUrls: ['./night-sky-demo.component.css']
})
export class NightSkyDemoComponent implements OnInit {
  starsAmount: number;

  constructor() { }

  ngOnInit() {
  }

  onStarsAmountChange() {}
}
