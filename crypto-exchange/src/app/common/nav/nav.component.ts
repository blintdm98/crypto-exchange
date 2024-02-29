import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { CryptoModel } from '../models/crypto.model';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isModalOpen = false;
  subCrypto?: Subscription;
  cryptoList: CryptoModel[] = [];

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private cryptoService: CryptoService
  ) {}

  // getCryptos() {
  //   this.subCrypto = this.cryptoService.getCryptos().subscribe({
  //     next: (cryptos: CryptoModel[]) => {
  //       this.cryptoList = cryptos;
  //       console.log(cryptos);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log('Crypto request is done');
  //     }
  //   });
  // }

  openModal() {
    this.isModalOpen = true;
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.modal'), 'display', 'block');
    // this.subCrypto = this.cryptoService.getCryptos().subscribe({
    //   next: (cryptos: CryptoModel[]) => {
    //     this.cryptoList = cryptos;
    //     console.log(cryptos);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Crypto request is done');
    //   }
    // });
  }

  closeModal() {
    this.isModalOpen = false;
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.modal'), 'display', 'none');
  }
}
