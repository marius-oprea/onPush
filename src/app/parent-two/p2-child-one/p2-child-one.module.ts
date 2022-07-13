import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { P2ChildOneComponent } from "./p2-child-one.component";

@NgModule({
  declarations: [P2ChildOneComponent],
  exports: [P2ChildOneComponent],
  imports: [CommonModule]
})
export class P2ChildOneModule {
}
