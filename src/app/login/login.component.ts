import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../restService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  private postService: AuthService

  authServ : AuthService;

  constructor(authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.authServ = authService;
  }


  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      uname: ['', Validators.required],
      passw: ['', Validators.required],

    });
  }

  login(){
    let resp = this.authServ.login(this.loginForm.controls['uname'].value, this.loginForm.controls['passw'].value);
    this.router.navigateByUrl('/admin');
    
  }

}
