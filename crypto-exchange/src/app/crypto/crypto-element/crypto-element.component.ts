import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoModel } from 'src/app/common/models/crypto.model';
import { RegModel } from 'src/app/common/models/reg.model';
import { CryptoService } from 'src/app/common/services/crypto.service';

@Component({
  selector: 'app-crypto-element',
  templateUrl: './crypto-element.component.html',
  styleUrls: ['./crypto-element.component.css']
})
export class CryptoElementComponent implements OnInit {

  crypto?: CryptoModel;
  asset_id?: string;
  matchingCrypto?: CryptoModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cryptoService: CryptoService,
  ){}

  ngOnInit(): void {
    const currentUserJson = localStorage.getItem('currentUser');
    if(currentUserJson) {
      const currentUser: RegModel = JSON.parse(currentUserJson);
    this.activatedRoute.paramMap.subscribe((params) => {
      let readParam = params.get('asset_id');
      if(readParam) {
          this.asset_id = readParam;
          // this.cryptoService.getCrypto(this.asset_id).subscribe({
          //   next: (crypto: CryptoModel) => {
          //     this.crypto = crypto;
              if (currentUser && currentUser.cryptoList) {
                this.crypto = currentUser.cryptoList.find(crypto => crypto.asset_id === this.asset_id);
              }
          //   },
          //   error: (error) => {
          //     console.log(error);
          //   }
          // })
        }
      })
  }
}

}
