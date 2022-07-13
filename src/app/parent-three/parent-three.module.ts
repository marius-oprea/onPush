import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { P3ChildOneModule } from './p3-child-one/p3-child-one.module';
import { P3ChildTwoModule } from './p3-child-two/p3-child-two.module';
import { ParentThreeComponent } from './parent-three.component';

@NgModule({
  declarations: [ParentThreeComponent],
  exports: [ParentThreeComponent],
  imports: [CommonModule, P3ChildOneModule, P3ChildTwoModule]
})
export class ParentThreeModule {
}
