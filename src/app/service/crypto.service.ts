import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
  ) { }

  getCoins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/coins`);
  }

  getActiveCurrencies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/active/coins`);
  }

  getCoinsDetails(cryptoId:any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/coin/${cryptoId}`);
  }

  getCryptoPrice(cryptoId: string): Observable<number> {
    const url = `${this.apiUrl}/price/${cryptoId}`;
    return this.http.get<any>(url).pipe(map((response:any) => response[cryptoId])
    );
  }

  getStockPriceUpdates(symbol: string, intervalMs: number): Observable<any> {
    return interval(intervalMs).pipe(
      switchMap(() => this.getCryptoPrice(symbol))
    );
  }
}
