import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { BetaComponent } from "./beta.component";

@NgModule({
  declarations: [BetaComponent],
  exports: [BetaComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule]
})
export class BetaModule {
}
