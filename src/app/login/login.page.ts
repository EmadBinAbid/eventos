import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router)
  {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', Validators.required),
        password: new FormControl('',  Validators.required)
      }
    );
  }

  ngOnInit() {
  }

  loginSubmit()
  {
    this.router.navigateByUrl('/home');
  }

  registerRoute()
  {
    this.router.navigateByUrl('/register');
  }

}
