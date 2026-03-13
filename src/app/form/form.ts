import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnInit {
  // user: any = {
  //   name: 'manik',
  //   email: 'swordmanik@gmail.com',
  //   mob: 9360507474,
  //   qualification: 'MCA',
  //   salary: 50000,
  // };
  user: any = signal({});

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/2')
      .subscribe((res) => (this.user = res));
  }
  click() {
    alert('User Detais has been updated successfully');
  }
}
