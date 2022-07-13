import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimaryModule } from "./primary/primary.module";
import { GammaComponent } from "./gamma.component";

@NgModule({
  declarations: [GammaComponent],
  exports: [GammaComponent],
  imports: [CommonModule, PrimaryModule]
})
export class GammaModule {
}
