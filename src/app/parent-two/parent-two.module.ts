import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParentTwoComponent } from './parent-two.component';

@NgModule({
  declarations: [ParentTwoComponent],
  exports: [ParentTwoComponent],
  imports: [CommonModule]
})
export class ParentTwoModule {  
}
