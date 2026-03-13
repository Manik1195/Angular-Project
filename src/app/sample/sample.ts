import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sample',
  imports: [CommonModule, FormsModule],
  templateUrl: './sample.html',
  styleUrl: './sample.css',
})
export class Sample {
  isChecked: boolean = false;
  IsInput: boolean = true;
  input1: string = '';
  input2: string = '';
  onChange() {
    this.isChecked = !this.isChecked;
  }
  showInput() {
    this.IsInput = true;
  }
  hideInput() {
    this.IsInput = false;
  }
}
