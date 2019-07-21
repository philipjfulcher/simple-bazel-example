import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmiiboCardComponent } from './amiibo-card/amiibo-card.component';

@NgModule({
  declarations: [AmiiboCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AmiiboCardComponent
  ]
})
export class SharedComponentsModule { }
