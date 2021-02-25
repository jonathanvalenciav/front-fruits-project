import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RoutesComponent } from './routes.component';
import { ProductionIncomeComponent } from './production-income/production-income.component';

const routes: Routes = [{
  path: '',
  component: RoutesComponent,
  children: [
    {
      path: 'production-income',
      component: ProductionIncomeComponent,
    },],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {
}
