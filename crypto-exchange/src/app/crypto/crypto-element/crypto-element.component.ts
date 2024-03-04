import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private cryptoService: CryptoService,
    private router: Router
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
        //     },
        //     error: (error) => {
        //       console.log(error);
        //     }
        //   })
        }
      })
  }
}

deleteCrypto() {
  const cryptoToDelete = this.asset_id;

  if(localStorage.getItem('currentUser')) {
    const currentUser: RegModel = JSON.parse(localStorage.getItem('currentUser')!);

    if(currentUser.cryptoList) {
      console.log(currentUser.cryptoList)
      const indexToDelete = currentUser.cryptoList.findIndex(crypto => crypto.asset_id === cryptoToDelete);

      if (indexToDelete !== -1) {
        currentUser.cryptoList.splice(indexToDelete, 1);
  
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.router.navigate(['/crypto-list']);
      }
      console.log(currentUser.cryptoList)
    }
  }
}

}
