import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../register-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private register: RegisterService,
    private router: Router,
  ) {
    this.registerform = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobilenumber: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }
  submit() {
    this.register.addUser(this.registerform.value).subscribe((res) => {
      this.router.navigateByUrl('user');
    });
  }
}
