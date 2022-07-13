import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlphaComponent } from "./alpha.component";

@NgModule({
  declarations: [AlphaComponent],
  exports: [AlphaComponent],
  imports: [CommonModule]
})
export class AlphaModule {
}
