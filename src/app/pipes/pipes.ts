import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom-pipe';
import { ImpurePipe } from '../impure-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CustomPipe, ImpurePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  angularPipes: string = 'learning angular pipes';
  user = {
    name: 'manik',
    id: 1,
    salary: 50000,
  };
  time: Date = new Date();
  items = of(['apple', 'banana', 'guava']);
  Mobile: any = 9360507474;
}
