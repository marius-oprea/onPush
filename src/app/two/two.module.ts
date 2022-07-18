import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GammaModule } from './gamma/gamma.module';
import { TwoComponent } from './two.component';

@NgModule({
  declarations: [TwoComponent],
  exports: [TwoComponent],
  imports: [CommonModule, GammaModule, MatButtonModule, MatCardModule]
})
export class TwoModule {  
}
