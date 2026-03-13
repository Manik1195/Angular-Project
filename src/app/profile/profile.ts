import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Shared } from '../shared';
import { CommonModule } from '@angular/common';
import { Crudservice } from '../crudservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  dummyData: any;
  // isEligible: boolean;
  constructor(
    private _crud: Crudservice,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {
    // this.isEligible = this._shared.isEligibleForSubscrition();
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this._crud.getData().subscribe((res) => {
      this.dummyData = res;
      this.cdr.detectChanges();
    });
  }
  User() {
    this.router.navigateByUrl('adduser');
  }
  edit(id: number) {
    this.router.navigate(['updateuser', id]);
  }
}
