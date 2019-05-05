import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  roles: string[] = [];
  errorMessage: string = '';

  constructor(private loginService: LoginService, 
              private tokenService: TokenService,
              private formBuilder: FormBuilder,
              private router: Router,) { }

  ngOnInit() {
    window.localStorage.removeItem('token');
    sessionStorage.setItem('token', '');
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.loginService.login(loginPayload).subscribe(
      data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUsername(data.email);
        this.tokenService.saveAuthorities(data.authorities);

        this.roles = this.tokenService.getAuthorities();
        this.router.navigate(['user']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  }

}
