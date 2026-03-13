import { Component, OnInit } from '@angular/core';
import { Crudservice } from '../crudservice';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../iuser';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  imports: [],
  templateUrl: './updateuser.html',
  styleUrl: './updateuser.css',
})
export class Updateuser implements OnInit {
  updateForm: FormGroup;
  constructor(
    private crud: Crudservice,
    private activeroute: ActivatedRoute,
    private fb: FormBuilder,
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
    });
  }
}
