import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // public login() {
  //   this.authService.login(this.loginForm.value).subscribe();
  // }

  // public registration() {
  //   this.authService.registration(this.loginForm.value).subscribe();
  // }

  // public loginWithGoogle() {
  //   this.authService.loginWithGoogle();
  // }
  constructor(
    private router: Router,
    // private authService: AuthService
  ) {}

  navigateToCryptoList() {
    this.router.navigate(['/crypto-list']);
  }

}
