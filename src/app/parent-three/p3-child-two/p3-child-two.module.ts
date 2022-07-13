import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { P3ChildTwoComponent } from "./p3-child-two.component";

@NgModule({
  declarations: [P3ChildTwoComponent],
  exports: [P3ChildTwoComponent],
  imports: [CommonModule]
})
export class P3ChildTwoModule {
}
