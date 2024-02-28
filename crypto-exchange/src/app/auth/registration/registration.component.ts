import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
    private router: Router
  ) {}

  ngOnInit(): void {

    this.regForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ]),
    },
    this.confirmPasswordValidator
    );

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

  confirmPasswordValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const pass = control.get('password')?.value;
    const cPass = control.get('confirmPassword')?.value;
  
    return pass === cPass ? null : { PasswordsNotMatch: true };
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
