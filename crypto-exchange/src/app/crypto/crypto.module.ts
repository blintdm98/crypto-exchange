import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { ChartComponent } from './chart/chart.component';
import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({
  declarations: [
    CryptoListComponent,
    ChartComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CryptoModule { }
