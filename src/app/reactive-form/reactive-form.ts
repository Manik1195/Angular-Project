import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  reactiveform: FormGroup;
  constructor(private fb: FormBuilder) {
    this.reactiveform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      isCheck: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: [''],
      }),
      Skills: this.fb.array([]),
    });
  }
  get Skills(): FormArray {
    return this.reactiveform.get('Skills') as FormArray;
  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      Experience: '',
    });
  }
  onClick() {
    this.Skills.push(this.newSkill());
  }
  delete(i: number) {
    this.Skills.removeAt(i);
  }
  applyStyle = 'set';
  onSubmit() {
    console.log(this.reactiveform.value);
  }
  click() {
    this.reactiveform.setValue({
      firstname: 'Manik',
      lastname: 'Manik',
      email: 'immanik@gmail.com',
      password: 'immanik',
      isCheck: true,
      address: {
        city: 'madurai',
        street: 'muthu street',
        pincode: 625020,
      },
      Skills: [
        {
          skill: 'Angular',
          experience: 2,
        },
      ],
    });
  }
  resetstyle = 'reset';
  Reset() {
    this.reactiveform.reset();
    // this.reactiveform.controls['firstname'].reset();
  }
  Patch() {
    this.reactiveform.patchValue({
      address: {
        city: 'madurai',
        street: 'muthu street',
        pincode: 625020,
      },
    });
    // this.reactiveform.controls['firstname'].patchValue('manik');
  }
}
