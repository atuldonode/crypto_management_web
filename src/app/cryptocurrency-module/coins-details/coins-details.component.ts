import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../service/crypto.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-coins-details',
  templateUrl: './coins-details.component.html',
  styleUrl: './coins-details.component.scss'
})
export class CoinsDetailsComponent implements OnInit {
  getCoinsData: any = {};
  subscription!: Subscription;
  state:any = this.location.getState();
  cryptoId = 'bitcoin'; // Specify the cryptocurrency ID (e.g., 'bitcoin', 'ethereum', 'litecoin', etc.)
  currentPrice:any = 0;
  constructor(
    private cryptoService: CryptoService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.cryptoId = this.state?.id;
    this.fetchStockPrice(this.cryptoId)
    this.getCoinDetails()
  }

  fetchStockPrice(symbol: string): void {
    this.subscription = this.cryptoService.getStockPriceUpdates(symbol, 5000) // Fetch every 5 seconds
      .subscribe((data:any) => {
        this.currentPrice = data;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  getCoinDetails(){
    this.cryptoService.getCoinsDetails(this.cryptoId).subscribe({
      next:(value:any) => {
        this.getCoinsData = value;
      },
      error(err:any) {
        return;
      },
    })
  }
}