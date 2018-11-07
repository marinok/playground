import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-night-sky-demo',
  templateUrl: './night-sky-demo.component.html',
  styleUrls: ['./night-sky-demo.component.css']
})
export class NightSkyDemoComponent implements OnInit {
  private _starsAmount: number;
  public set starsAmount(value){
    console.log("OnChange", value);
    this._starsAmount = value
  }
  public get starsAmount (): number {
    return this._starsAmount;
  }

  constructor() { }

  ngOnInit() {
  }
  
  onStarsAmountChange() {}
}
