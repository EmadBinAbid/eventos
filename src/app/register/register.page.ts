import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router)
  {
    this.registerForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit() {
  }

  registerSubmit()
  {
    
  }

  loginRoute()
  {
    this.router.navigateByUrl('/login');
  }

}
