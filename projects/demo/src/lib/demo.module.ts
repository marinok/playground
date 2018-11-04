import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NightSkyComponent } from 'src/app/components/night-sky/night-sky.component';
import { SvgDemoComponent } from './svg-demo/svg-demo.component';
import { NightSkyDemoComponent } from './night-sky-demo/night-sky-demo.component';

const appRoutes: Routes = [
  { path: 'night-sky', component: NightSkyDemoComponent },
  { path: 'svg', component: SvgDemoComponent }
];


@NgModule({
  declarations: [DemoComponent, NightSkyComponent, SvgDemoComponent, NightSkyDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [DemoComponent]
})
export class DemoModule { }
