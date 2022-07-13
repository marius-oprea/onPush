import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BetaComponent } from "./beta.component";

@NgModule({
  declarations: [BetaComponent],
  exports: [BetaComponent],
  imports: [CommonModule]
})
export class BetaModule {
}
