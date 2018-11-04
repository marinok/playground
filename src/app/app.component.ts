import { Component, ViewChild, ElementRef, ChangeDetectorRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isShown: boolean = false;
  starsAmount: number;

  @ViewChild('test') test: ElementRef;

  constructor(private cdr:ChangeDetectorRef){}

  onClickFn() {
    this.isShown = true;
    this.cdr.detach();
    this.cdr.detectChanges();
    console.log(this.test);
    
  }

  onStarsAmountChange() {
    
  }

}
