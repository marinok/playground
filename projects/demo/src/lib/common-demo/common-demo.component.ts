import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-common-demo',
  templateUrl: './common-demo.component.html',
  styleUrls: ['./common-demo.component.css']
})
export class CommonDemoComponent implements OnInit {
  isShown: boolean = false;
  @ViewChild('test') 'test': ElementRef
  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit() {
  }
  onClickFn() {
    this.isShown = true;
    this.cdr.detach();
    this.cdr.detectChanges();
    console.log(this.test);
    
  }
}
