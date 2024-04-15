import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'coins', loadChildren: () => import('./cryptocurrency-module/cryptocurrency-module.module').then(m => m.CryptocurrencyModuleModule) },
  { path: '', redirectTo: '/coins', pathMatch: 'full' },
  { path: '**', redirectTo: '/coins' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
