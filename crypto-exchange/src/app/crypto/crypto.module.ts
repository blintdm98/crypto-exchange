import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { ChartComponent } from './chart/chart.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavComponent } from '../common/nav/nav.component';
import { CryptoElementComponent } from './crypto-element/crypto-element.component';
import { AppRoutingModule } from '../app-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CryptoListComponent,
    ChartComponent,
    CalculatorComponent,
    NavComponent,
    CryptoElementComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CryptoModule { }
