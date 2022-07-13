import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GammaModule } from './gamma/gamma.module';
import { TwoComponent } from './two.component';

@NgModule({
  declarations: [TwoComponent],
  exports: [TwoComponent],
  imports: [CommonModule, GammaModule]
})
export class TwoModule {  
}
