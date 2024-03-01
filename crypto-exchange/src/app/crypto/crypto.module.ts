import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { ChartComponent } from './chart/chart.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavComponent } from '../common/nav/nav.component';
import { CryptoElementComponent } from './crypto-element/crypto-element.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CryptoListComponent,
    ChartComponent,
    CalculatorComponent,
    NavComponent,
    CryptoElementComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class CryptoModule { }
