import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CryptoListComponent } from './crypto/crypto-list/crypto-list.component';
import { CalculatorComponent } from './crypto/calculator/calculator.component';
import { ChartComponent } from './crypto/chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/crypto-list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { 
    path: 'crypto-list', component: CryptoListComponent,
    children: [
      { path: 'calculator', component: CalculatorComponent},
      { path: 'chart', component: ChartComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
