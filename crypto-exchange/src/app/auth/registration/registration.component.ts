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
  updateEmail?: string;
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

  saveUserToLocalStorage() {
    const allUsersJson = localStorage.getItem('allUsers');
    let allUsers: RegModel[] = [];

    if(allUsersJson) {
      allUsers = JSON.parse(allUsersJson);
    }

    const existingUser = allUsers.find(user => user.email === this.email?.value);

    if(existingUser) {
      this.updateEmail = existingUser.email;
      console.log('user exist');
      existingUser.email = this.email?.value;
      existingUser.name = this.name?.value;
      existingUser.password = this.password?.value;
      existingUser.confirmPassword = this.confirmPassword?.value;

      const updatedUserJson = JSON.stringify(existingUser);
      localStorage.setItem('currentUser', updatedUserJson);
    } else {
      const user: RegModel = {
        email: this.email?.value,
        name: this.name?.value,
        password: this.password?.value,
        confirmPassword: this.confirmPassword?.value
      }
      allUsers.push(user);
    }

    localStorage.setItem('allUsers', JSON.stringify(allUsers));
    this.router.navigate(['login']);
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
