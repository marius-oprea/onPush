import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { AlphaComponent } from "./alpha.component";

@NgModule({
  declarations: [AlphaComponent],
  exports: [AlphaComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule]
})
export class AlphaModule {
}
