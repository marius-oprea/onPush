import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimaryModule } from "./primary/primary.module";
import { GammaComponent } from "./gamma.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [GammaComponent],
  exports: [GammaComponent],
  imports: [CommonModule, PrimaryModule, MatButtonModule, MatCardModule]
})
export class GammaModule {
}
