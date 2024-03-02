import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CryptoModel } from 'src/app/common/models/crypto.model';
import { RegModel } from 'src/app/common/models/reg.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  @ViewChild('input1Ref') input1Ref: any;
  @ViewChild('input2Ref') input2Ref: any;
  @ViewChild('span1Ref') span1Ref: any;
  @ViewChild('span2Ref') span2Ref: any;

  defaultPriceValue: number = 1;
  defaultCryptoValue: number = 1;

  calcForm!: FormGroup;
  cryptoModel?: CryptoModel;
  asset_id?: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.calcForm = new FormGroup({
      price: new FormControl(1),
      crypto: new FormControl(1)
    })

    const currentUserJson = localStorage.getItem('currentUser');
    if(currentUserJson) {
      const currentUser: RegModel = JSON.parse(currentUserJson);
      this.activatedRoute.paramMap.subscribe((params) => {
      let readParam = params.get('asset_id');
      if(readParam) {
          this.asset_id = readParam;
            if (currentUser && currentUser.cryptoList) {
              this.cryptoModel = currentUser.cryptoList.find(crypto => crypto.asset_id === this.asset_id);
              if(this.cryptoModel) {
                setTimeout(() => {
                  this.calcForm.patchValue({
                    price: 0,  // Kezdeti érték
                    crypto: 0  // Kezdeti érték
                  });
                });
                this.defaultCryptoValue = this.defaultPriceValue * this.cryptoModel.price_usd
                this.calcForm.valueChanges.subscribe((formValues) => {
                  if (formValues.price !== null && formValues.crypto !== null && this.cryptoModel) {
                    if (formValues.price !== 0) {
                      this.calcForm.patchValue({
                        price: formValues.price,
                        crypto: formValues.price / this.cryptoModel.price_usd
                      }, { emitEvent: false });
                  } else if (formValues.crypto !== 0) {
                    this.calcForm.patchValue({
                      price: formValues.crypto * this.cryptoModel.price_usd,
                      crypto: formValues.crypto
                    }, { emitEvent: false });
                  }
                }
                });
              }
            }
        }
      });
  }
}


  get price() {
    return this.calcForm.get('price');
  }

  get crypto() {
    return this.calcForm.get('crypto');
  }

  swapInputs(): void {
    const temp = this.input1Ref.nativeElement.value;
    this.input1Ref.nativeElement.value = this.input2Ref.nativeElement.value;
    this.input2Ref.nativeElement.value = temp;
    const tempspan = this.span1Ref.nativeElement.textContent;
    this.span1Ref.nativeElement.textContent = this.span2Ref.nativeElement.textContent
    this.span2Ref.nativeElement.textContent = tempspan;
  }

}
