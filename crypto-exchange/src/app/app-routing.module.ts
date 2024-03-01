import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CryptoListComponent } from './crypto/crypto-list/crypto-list.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { CryptoElementComponent } from './crypto/crypto-element/crypto-element.component';

const routes: Routes = [
  { path: '', redirectTo: '/crypto-list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'crypto-element/:assetId', component: CryptoElementComponent},
  { 
    path: 'crypto-list', component: CryptoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
