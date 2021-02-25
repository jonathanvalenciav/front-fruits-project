import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionIncomeComponent } from './production-income/production-income.component';
import { NbButtonModule, NbCardModule, NbStepperModule } from '@nebular/theme';
import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './routes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    CommonModule,
    NbStepperModule,
    RoutesRoutingModule,
    NbCardModule,
  ],
  declarations: [
    RoutesComponent,
    ProductionIncomeComponent,
  ],
})
export class RoutesModule { }
