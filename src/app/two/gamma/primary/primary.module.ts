import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PrimaryComponent } from './primary.component';

@NgModule({
  declarations: [PrimaryComponent],
  exports: [PrimaryComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule]
})
export class PrimaryModule {
}
