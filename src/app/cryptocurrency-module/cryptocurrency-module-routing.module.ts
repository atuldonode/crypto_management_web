import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsComponent } from './coins/coins.component';
import { CoinsDetailsComponent } from './coins-details/coins-details.component';

const routes: Routes = [
  // { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: '', component: CoinsComponent },
  { path: 'details', component: CoinsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptocurrencyModuleRoutingModule { }
