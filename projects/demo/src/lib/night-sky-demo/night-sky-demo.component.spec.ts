import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightSkyDemoComponent } from './night-sky-demo.component';

describe('NightSkyDemoComponent', () => {
  let component: NightSkyDemoComponent;
  let fixture: ComponentFixture<NightSkyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightSkyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightSkyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
