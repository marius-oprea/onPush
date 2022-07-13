import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DeltaComponent } from "./delta.component";

@NgModule({
  declarations: [DeltaComponent],
  exports: [DeltaComponent],
  imports: [CommonModule]
})
export class DeltaModule {
}
