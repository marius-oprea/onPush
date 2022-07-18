import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AlphaModule } from './alpha/alpha.module';
import { BetaModule } from './beta/beta.module';
import { OneComponent } from './one.component';

@NgModule({
  declarations: [OneComponent],
  exports: [OneComponent],
  imports: [CommonModule, AlphaModule, BetaModule, MatButtonModule, MatCardModule]
})
export class OneModule {
}
