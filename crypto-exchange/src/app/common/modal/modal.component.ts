import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Subscription } from 'rxjs';
import { CryptoModel } from '../models/crypto.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  subCrypto?: Subscription;
  cryptoList: CryptoModel[] = [];

  constructor(
    private cryptoService: CryptoService,
  ) {}

  getCryptos() {
    this.subCrypto = this.cryptoService.getCryptos().subscribe({
      next: (cryptos: CryptoModel[]) => {
        this.cryptoList = cryptos;
        console.log(cryptos);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Crypto request is done');
      }
    });
  }

}
