import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { P3ChildOneComponent } from "./p3-child-one.component";

@NgModule({
  declarations: [P3ChildOneComponent],
  exports: [P3ChildOneComponent],
  imports: [CommonModule]
})
export class P3ChildOneModule {
}
