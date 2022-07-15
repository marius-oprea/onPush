import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoModule } from './two/two.module';
import { OneModule } from './one/one.module';
import { ThreeModule } from './three/three.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OneModule,
    TwoModule,
    ThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    const originalTick = applicationRef.tick;
    applicationRef.tick = function() {
      const windowPerfomance = window.performance;
      const  before = windowPerfomance.now();
      const retValue = originalTick.apply(this);
      const after = windowPerfomance.now();
      const runTime = after - before;
      window.console.log('CHANGE DETECTION TIME' , runTime);
      return retValue;
    };
  }
 }
