import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { CryptoModel, cryptos } from '../models/crypto.model';
import { CryptoService } from '../services/crypto.service';
import { RegModel } from '../models/reg.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isModalOpen = false;
  subCrypto?: Subscription;
  cryptoList: CryptoModel[] = [];
  navList: [] = [];

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

  addCrypto(choosenCrypto: CryptoModel){
    const currentUserJson = localStorage.getItem('currentUser');
    const allUsersJson = localStorage.getItem('allUsers');

    if(currentUserJson && allUsersJson) {
      const currentUser: RegModel = JSON.parse(currentUserJson);
      const allUsers: RegModel[] = JSON.parse(allUsersJson);

      if(!currentUser.cryptoList) {
        currentUser.cryptoList = [];
      }

      if (!currentUser.cryptoList.some(crypto => crypto.name === choosenCrypto.name)) {
        currentUser.cryptoList.push(choosenCrypto);
      }

        for (const user of allUsers) {
          if (user.email === currentUser.email) {
            if (!user.cryptoList) {
              user.cryptoList = [];
            }
    
            if (!user.cryptoList.some(crypto => crypto.name === choosenCrypto.name)) {
              user.cryptoList.push(choosenCrypto);
            }
          }
        }

        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('allUsers', JSON.stringify(allUsers));

        console.log(`${choosenCrypto.name} added to cryptoList`);
      } else {
        console.error('User or users not found in localStorage');
      }
    }

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

    //*mock adatokhoz
    for(const crypto of cryptos) {
      this.cryptoList.push(crypto);
      console.log(crypto);
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.modal'), 'display', 'none');
  }
}
