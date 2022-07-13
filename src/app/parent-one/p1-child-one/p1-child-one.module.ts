import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { P1ChildOneComponent } from "./p1-child-one.component";

@NgModule({
  declarations: [P1ChildOneComponent],
  exports: [P1ChildOneComponent],
  imports: [CommonModule]
})
export class P1ChildOneModule {
}
