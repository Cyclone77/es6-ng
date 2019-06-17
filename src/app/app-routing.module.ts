import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProxyComponent } from './proxy/proxy.component';

const routes: Routes = [{
  path: 'proxy',
  component: ProxyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
