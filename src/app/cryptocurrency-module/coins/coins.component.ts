import { Component } from '@angular/core';
import { CryptoService } from '../../service/crypto.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.scss'
})
export class CoinsComponent {
  getCoinsData:any = [];
  constructor(
    private cryptoService: CryptoService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllCoins()
  }

  getAllCoins(){
    this.cryptoService.getActiveCurrencies().subscribe({
      next:(value) => {
        this.getCoinsData = value;
      },
      error(err) {
        return;
      },
    })
  }

  openModal(id?:any){
    let queryParams = {
      id,
    };
    this.router.navigate(['coins/details'], {
      state: {id}
    });
  }
}
