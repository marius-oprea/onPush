import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { P1ChildTwoComponent } from "./p1-child-two.component";

@NgModule({
  declarations: [P1ChildTwoComponent],
  exports: [P1ChildTwoComponent],
  imports: [CommonModule]
})
export class P1ChildTwoModule {
}
