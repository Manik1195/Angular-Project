import { Component, OnInit } from '@angular/core';
import { Crudservice } from '../crudservice';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../iuser';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  imports: [ReactiveFormsModule],
  templateUrl: './updateuser.html',
  styleUrl: './updateuser.css',
})
export class Updateuser implements OnInit {
  updateForm: FormGroup;
  constructor(
    private crud: Crudservice,
    private activeroute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.updateForm = this.fb.group({
      name: [''],
      salary: [''],
      Role: [''],
    });
  }
  user: any;
  id: number = 0;
  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    console.log(this.id);

    this.crud.getDataById(this.id).subscribe((res) => {
      this.user = res;
      this.updateForm.patchValue(this.user);
    });
  }
  cancel() {
    this.router.navigateByUrl('profile');
  }
  onSubmit() {
    this.crud.putDataByID(this.id, this.updateForm.value).subscribe((res) => {
      this.router.navigateByUrl('profile');
    });
  }
}
