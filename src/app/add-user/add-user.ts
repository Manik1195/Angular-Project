import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Crudservice } from '../crudservice';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _crud: Crudservice,
  ) {
    this.userForm = this.fb.group({
      name: [''],
      salary: [''],
      Role: [''],
    });
  }
  onSubmit() {
    this._crud.postData(this.userForm.value).subscribe(res=>console.log(this.userForm.value));
    

    this.userForm.reset();
    this.router.navigateByUrl('profile');
  }

  cancel() {
    this.router.navigateByUrl('profile');
  }
}
