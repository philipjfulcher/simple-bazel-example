import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmiibosContainerComponent } from './feature-amiibos/amiibos-container/amiibos-container.component';


const routes: Routes = [
  {
    path: 'amiibos',
    component: AmiibosContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
