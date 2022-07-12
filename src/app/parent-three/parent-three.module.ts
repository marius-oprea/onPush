import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParentThreeComponent } from './parent-three.component';

@NgModule({
  declarations: [ParentThreeComponent],
  exports: [ParentThreeComponent],
  imports: [CommonModule]
})
export class ParentThreeModule {
}
