import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAccessModule } from './shared/data-access/data-access.module';
import { FeatureAmiibosModule } from './feature-amiibos/feature-amiibos.module';
import { FeatureAmiiboTypesModule } from './feature-amiibo-types/feature-amiibo-types.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataAccessModule,
    FeatureAmiibosModule,
    FeatureAmiiboTypesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
