import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoModel } from 'src/app/common/models/crypto.model';
import { CryptoService } from 'src/app/common/services/crypto.service';

@Component({
  selector: 'app-crypto-element',
  templateUrl: './crypto-element.component.html',
  styleUrls: ['./crypto-element.component.css']
})
export class CryptoElementComponent implements OnInit {

  crypto?: CryptoModel;
  assetId?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cryptoService: CryptoService,
  ){}

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params) => {
        let readParam = params.get('assetId');
        if(readParam) {
          console.log(readParam)
          this.assetId = readParam;
          this.cryptoService.getCrypto(this.assetId).subscribe({
            next: (crypto: CryptoModel) => {
              this.crypto = crypto;
            }
          })
        }
      })
  }

}
