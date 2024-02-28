import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/common/models/login.model';
import { RegModel } from 'src/app/common/models/reg.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    // private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    const storedUsers = JSON.parse(localStorage.getItem('allUsers')!) || [];
    const userLogin: LoginModel = {
      username: this.username?.value,
      password: this.password?.value,
    }

    const existingUser = storedUsers.find((user:RegModel) => {
      return user.name === userLogin.username && user.password === userLogin.password
    })

    if(existingUser) {
      console.log('sikeres bejelentkezés');
      this.router.navigate(['/crypto-list']);
    } else {
      console.log('sikertelen bejelentkezés');
    }
  }
  // public login() {
  //   this.authService.login(this.loginForm.value).subscribe();
  // }

  // public registration() {
  //   this.authService.registration(this.loginForm.value).subscribe();
  // }
  public registration() {
    this.router.navigate(['registration']);
  }

  // public loginWithGoogle() {
  //   this.authService.loginWithGoogle();
  // }

}
