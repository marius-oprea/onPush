import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParentOneComponent } from './parent-one.component';

@NgModule({
  declarations: [ParentOneComponent],
  exports: [ParentOneComponent],
  imports: [CommonModule]
})
export class ParentOneModule {
}
