import { Component, computed, signal } from '@angular/core';
import { MarksService } from '../marks-service';
import { Imarks } from '../imarks';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marks',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './marks.html',
  styleUrl: './marks.css',
})
export class Marks {
  marksheetform: any;
  animateBar = signal(false);
  marks = signal<Imarks[]>([]);
  loading = signal(false);
  isFetched: boolean = false;
  show: boolean = false;
  total: number = 0;
  constructor(
    private markservice: MarksService,
    private fb: FormBuilder,
  ) {
    this.marksheetform = this.fb.group({
      name: ['', Validators.required],
      roll: ['', Validators.required],
    });
  }
  getMarks() {
    const name = this.marksheetform.value.name;
    const roll = Number(this.marksheetform.value.roll);

    this.loading.set(true);

    this.markservice.getMarkByNameAndRoll(name, roll).subscribe((res: Imarks[]) => {
      this.marks.set(res);
      console.log(this.marks());
      this.isFetched = true;
      this.show = true;
      this.loading.set(false);
      console.log(this.show);
      setTimeout(() => {
        this.animateBar.set(true);
      }, 250);
    });
  }
  Reset() {
    this.show = false;
    console.log(this.show);
    this.marksheetform.reset();
    this.animateBar.set(false);
  }
}
