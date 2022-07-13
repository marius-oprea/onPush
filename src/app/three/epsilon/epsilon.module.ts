import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EpsilonComponent } from "./epsilon.component";

@NgModule({
  declarations: [EpsilonComponent],
  exports: [EpsilonComponent],
  imports: [CommonModule]
})
export class EpsilonModule {
}
