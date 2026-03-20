import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { Shared } from '../shared';
import { CommonModule } from '@angular/common';
import { Crudservice } from '../crudservice';
import { Router } from '@angular/router';
import { Iuser } from '../iuser';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  dummyData = signal<Iuser[]>([]);
  loading = signal(true);
  // isEligible: boolean;
  constructor(
    private _crud: Crudservice,
    private router: Router,
  ) {
    // this.isEligible = this._shared.isEligibleForSubscrition();
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this._crud.getData().subscribe((res) => {
      this.dummyData.set(res);
      this.loading.set(false);
    });
  }
  User() {
    this.router.navigateByUrl('adduser');
  }
  edit(id: number) {
    this.router.navigate(['updateuser', id]);
  }
  View(id: number) {
    this.router.navigate(['viewuser/', id]);
  }
  Delete(id: number) {
    this._crud.DeleteDataById(id).subscribe(() => {
      const updated = this.dummyData().filter((data) => data.id != id);
      this.dummyData.set(updated);
    });
  }
}
