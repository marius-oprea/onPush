import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentTwoModule } from './parent-two/parent-two.module';
import { ParentOneModule } from './parent-one/parent-one.module';
import { ParentThreeModule } from './parent-three/parent-three.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParentOneModule,
    ParentTwoModule,
    ParentThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
