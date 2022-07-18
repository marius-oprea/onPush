import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { EpsilonComponent } from "./epsilon.component";

@NgModule({
  declarations: [EpsilonComponent],
  exports: [EpsilonComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule]
})
export class EpsilonModule {
}
