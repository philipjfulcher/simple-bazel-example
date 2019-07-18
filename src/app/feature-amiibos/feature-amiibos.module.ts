import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmiibosContainerComponent } from './amiibos-container/amiibos-container.component';
import { AmiiboCardComponent } from './amiibo-card/amiibo-card.component';

@NgModule({
  declarations: [AmiibosContainerComponent, AmiiboCardComponent],
  imports: [
    CommonModule
  ]
})
export class FeatureAmiibosModule { }
