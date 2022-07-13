import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { P1ChildOneModule } from './p1-child-one/p1-child-one.module';
import { P1ChildTwoModule } from './p1-child-two/p1-child-two.module';
import { ParentOneComponent } from './parent-one.component';

@NgModule({
  declarations: [ParentOneComponent],
  exports: [ParentOneComponent],
  imports: [CommonModule, P1ChildOneModule, P1ChildTwoModule]
})
export class ParentOneModule {
}
