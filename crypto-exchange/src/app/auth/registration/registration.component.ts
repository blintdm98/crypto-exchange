import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ParamMap, Router } from '@angular/router';
import { RegModel } from 'src/app/common/models/reg.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  updateCustomerId?: string;
  regForm!: FormGroup;
  regModel?: RegModel;

  constructor(
    // private customerService: CustomerService,
    // private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.regForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [
        Validators.required, 
        // this.customConfirmPasswordValidator(),
      ]),
    });

    // this.activatedRoute.paramMap.subscribe({
    //   next: (params: ParamMap) => {
    //     let customerId = params.get('id');
    //     if (customerId) {
    //       this.customerService.getCustomerWithGetDoc(customerId).subscribe({
    //         next: (data) => {
    //           this.customerRegForm.patchValue(data);
    //           this.updateCustomerId = data.id;
    //         },
    //       });
    //     }
    //   },
    // });
  }

  get email() {
    return this.regForm.get('email');
  }
  get name() {
    return this.regForm.get('name');
  }
  get password() {
    return this.regForm.get('password');
  }
  get confirmPassword() {
    return this.regForm.get('confirmPassword');
  }

  customConfirmPasswordValidator() {
    const regFormtemp = this.regForm.value;
    console.log(regFormtemp);
    regFormtemp.password = this.regModel?.password;
    return (control: AbstractControl) => {
      return !control.value || control.value === regFormtemp.password  ? null : { passwordMismatch: true };
    };
  }

  // submitRegForm() {
  //   if (!this.customerRegForm.invalid) {
  //     const newCustumer: CustomerModel = this.customerRegForm.value;

  //     if (this.updateCustomerId) {
  //       newCustumer.id = this.updateCustomerId;
  //       this.customerService.updateCustomer(newCustumer).subscribe({
  //         complete: () => {
  //           this.router.navigate(['customers']);
  //         },
  //       });
  //     } else {
  //       this.customerService.addCustomer(newCustumer).subscribe({
  //         next: (docRef) => {
  //           console.log('Customer saved with ID: ', docRef['id']);
  //         },
  //         error: (err) => {
  //           console.log(err);
  //         },
  //       });
  //     }
  //   }
  // }
}
