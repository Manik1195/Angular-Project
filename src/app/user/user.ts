import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../register-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private reg: RegisterService,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1.nogOnChanges called');
  }
  ngOnInit(): void {
    console.log('2.ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('3.ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('4.ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('5.ngAfterContentChanged called');
  }
  ngAfterViewInit(): void {
    console.log('6.ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('7.ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('8.ngOnDestroyCalled');
  }

  click() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.reg.ValidateUser(username, password).subscribe((res) => {
      if (res.length > 0) {
        alert('Login Success');
        this.router.navigateByUrl('profile');
      } else {
        alert('Invalid username or password');
      }
    });
  }   
  isClicked: boolean = false;
  perform() {
    this.isClicked = true;
  }
  register() {
    this.router.navigateByUrl('register');
  }
}
