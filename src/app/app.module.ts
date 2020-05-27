import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Depth1Component } from '../depth1/depth1.component';
import { Depth2Component } from '../depth2/depth2.component';
import { Depth3Component } from '../depth3/depth3.component';

@NgModule({
  declarations: [
    AppComponent,
    Depth1Component,
    Depth2Component,
    Depth3Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
