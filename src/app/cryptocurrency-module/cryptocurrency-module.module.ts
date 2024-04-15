import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptocurrencyModuleRoutingModule } from './cryptocurrency-module-routing.module';
import { CoinsComponent } from './coins/coins.component';
import { CoinsDetailsComponent } from './coins-details/coins-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoinsComponent,
    CoinsDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CryptocurrencyModuleRoutingModule
  ]
})
export class CryptocurrencyModuleModule { }
