import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm implements OnInit {
  UserInfo: User = {};
  onSubmit(user: NgForm) {
    console.log(user.value);
  }
  ngOnInit(): void {
    this.UserInfo = {
      // firstName: 'Sivs',
      // lastName: 'Sivsnath',
      // email: 'sivs@gmail.com',
      // password: 'Imsivs1992',
      // check: true,
    };
  }
  click(userForm: NgForm) {
    console.log('setvalue function called');

    let obj = {
      firstname: 'Sivs',
      lastname: 'Sivsnath',
      email: 'sivs@gmail.com',
      password: 'Imsivs1992',
      check: true,
    };
    userForm.setValue(obj);
  }
  applyStyle = 'set';
  patchstyle = 'patch';
  Patch(userForm: NgForm) {
    let obj = {
      firstname: 'Sivs',
      lastname: 'Sivsnath',
      email: 'sivs@gmail.com',
    };
    userForm.control.patchValue(obj);
  }
  resetstyle = 'reset';
  Reset(userForm: NgForm) {
    userForm.reset();
  }
}
