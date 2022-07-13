import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlphaModule } from './alpha/alpha.module';
import { BetaModule } from './beta/beta.module';
import { OneComponent } from './one.component';

@NgModule({
  declarations: [OneComponent],
  exports: [OneComponent],
  imports: [CommonModule, AlphaModule, BetaModule]
})
export class OneModule {
}
