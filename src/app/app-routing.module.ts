import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProxyComponent } from './proxy/proxy.component';
import { AsyncComponent } from './async/async.component';

const routes: Routes = [{
  path: 'proxy',
  component: ProxyComponent
}, {
  path: 'async',
  component: AsyncComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
