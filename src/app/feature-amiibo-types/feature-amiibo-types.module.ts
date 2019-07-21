import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmiiboTypesContainerComponent } from './amiibo-types-container/amiibo-types-container.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';

@NgModule({
  declarations: [AmiiboTypesContainerComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class FeatureAmiiboTypesModule { }
