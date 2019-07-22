import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmiibosContainerComponent } from './feature-amiibos/amiibos-container/amiibos-container.component';
import { AmiiboTypesContainerComponent } from './feature-amiibo-types/amiibo-types-container/amiibo-types-container.component';

const routes: Routes = [
  {
    path: 'amiibos',
    component: AmiibosContainerComponent
  },
  {
    path: 'types',
    component: AmiiboTypesContainerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/amiibos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
