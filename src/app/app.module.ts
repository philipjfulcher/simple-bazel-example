import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAccessModule } from './data-access/data-access.module';
import { FeatureAmiibosModule } from './feature-amiibos/feature-amiibos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataAccessModule,
    FeatureAmiibosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
