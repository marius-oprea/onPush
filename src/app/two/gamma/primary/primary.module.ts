import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryComponent } from './primary.component';

@NgModule({
  declarations: [PrimaryComponent],
  exports: [PrimaryComponent],
  imports: [CommonModule]
})
export class PrimaryModule {
}
