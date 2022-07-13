import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { P2ChildOneModule } from './p2-child-one/p2-child-one.module';
import { ParentTwoComponent } from './parent-two.component';

@NgModule({
  declarations: [ParentTwoComponent],
  exports: [ParentTwoComponent],
  imports: [CommonModule, P2ChildOneModule]
})
export class ParentTwoModule {  
}
