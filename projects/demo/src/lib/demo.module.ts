import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NightSkyComponent } from 'src/app/components/night-sky/night-sky.component';
import { SvgDemoComponent } from './svg-demo/svg-demo.component';
import { NightSkyDemoComponent } from './night-sky-demo/night-sky-demo.component';
import { CommonDemoComponent } from './common-demo/common-demo.component';

const appRoutes: Routes = [
  { path: 'common', component: CommonDemoComponent },
  { path: 'night-sky', component: NightSkyDemoComponent },
  { path: 'svg', component: SvgDemoComponent }
];


@NgModule({
  declarations: [DemoComponent, NightSkyComponent, SvgDemoComponent, NightSkyDemoComponent, CommonDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [DemoComponent]
})
export class DemoModule { }
