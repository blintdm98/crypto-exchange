import { CryptoService } from 'src/app/common/services/crypto.service';
import { Component, OnInit } from '@angular/core';
import { CryptoModel, SymbolModel } from 'src/app/common/models/crypto.model';
import { RegModel } from 'src/app/common/models/reg.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {

  cryptoList?: CryptoModel[];
  price_low?: number;
  price_high?: number;

  constructor(
    private cryptoService:CryptoService
  ) {}

  ngOnInit(): void {
      if(localStorage.getItem('currentUser')) {
        const currentUser: RegModel = JSON.parse(localStorage.getItem('currentUser')!);
        this.cryptoList = currentUser.cryptoList;
        //*túl sok adat érkezik, és ezért nem sikerül használjam a websocketet
        // * mert nem kapom meg a symbol_id-t
        //* a listámban lévő kriptókhoz tartozó symbol_id szerettem volna kinyerni
        // this.cryptoList.forEach(list => {
        //   this.cryptoService.getSymbols(list.asset_id).subscribe({
        //     next: (symbols: SymbolModel[]) => {
        //      console.log('Symbols for', symbols);
        //     },
        //    error: (error) => {
        //       console.log(error);
        //     }
        //   })
        // })
      }
  }

}
