import { Component, OnInit, signal } from '@angular/core';
import { Iuser } from '../iuser';
import { Crudservice } from '../crudservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-viewuser',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './viewuser.html',
  styleUrl: './viewuser.css',
})
export class Viewuser implements OnInit {
  constructor(
    private crud: Crudservice,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {}
  dummyData = signal<Iuser | null>(null);
  loading = signal(true);
  id: number = 0;
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.crud.getDataById(this.id).subscribe((res) => {
      this.dummyData.set(res);
      console.log(res);

      this.loading.set(false);
    });
  }
  close() {
    this.router.navigateByUrl('profile');
  }
}
