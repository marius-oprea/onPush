import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { DeltaComponent } from "./delta.component";

@NgModule({
  declarations: [DeltaComponent],
  exports: [DeltaComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule]
})
export class DeltaModule {
}
