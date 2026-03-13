import { Component } from '@angular/core';
import { Highlight } from '../highlight';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Shared } from '../shared';

@Component({
  selector: 'app-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  dummyData: any;
  constructor(private _shared: Shared) {
    // this.dummyData = this._shared.userData;
  }
  name: string = 'Manik';
  id: number = 1;
  image: string = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg';
  onSave() {
    alert('Data saved successfully');
  }
  onChange() {
    alert('Data has changed');
  }
  random = '';
  isClicked: boolean = false;
  perform() {
    this.isClicked = !this.isClicked;
  }
}
