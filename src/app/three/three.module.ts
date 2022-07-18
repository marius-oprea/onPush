import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DeltaModule } from './delta/delta.module';
import { EpsilonModule } from './epsilon/epsilon.module';
import { ThreeComponent } from './three.component';

@NgModule({
  declarations: [ThreeComponent],
  exports: [ThreeComponent],
  imports: [CommonModule, EpsilonModule, DeltaModule, MatButtonModule, MatCardModule]
})
export class ThreeModule {
}
