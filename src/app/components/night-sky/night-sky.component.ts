import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-night-sky',
  templateUrl: './night-sky.component.html',
  styleUrls: ['./night-sky.component.scss']
})
export class NightSkyComponent implements OnInit {
  @ViewChild('starField', {read: ElementRef}) starField: ElementRef;
  @Input()starsAmount?: number;

  ngOnInit() {
    this.starsAmount = ((this.starsAmount === undefined || this.starsAmount === null )? 0 : this.starsAmount);
    this.createStareInit(this.starsAmount);
  }

  ngOnChanges() {
    this.createStareInit(this.starsAmount);
  }

  private createStareInit(starsAmount) {
    this.starField.nativeElement.innerHTML = '';
    const starCreation = setInterval(this.createStare, 800, this.starField);
    const timeoutVal = starsAmount === 0 ? 0 : (starsAmount - 1) * 1000;
    setTimeout(function() {
      clearInterval(starCreation);
    },timeoutVal);
  }

  private createStare(starField) {
    const style = 'style="z-index:1; position: absolute; top: ' + Math.floor(Math.random() * 190) + 'px; left: ' + Math.floor(Math.random() * 670) + 'px"';
    const size = Math.floor(Math.random() * 15) + 5;
    const star = '<svg class="star" ' + style + ' height="'+size+'" width="'+size+'"  viewBox="0 0 10 10"><polyline points="5,0 4,4 0,5 4,6 5,10 6,6 10,5 6,4 5,0" fill="#fff" stroke-width="1" /></svg>';
    starField.nativeElement.insertAdjacentHTML('beforeend', star);
  }
}
