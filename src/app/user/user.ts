import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor(private router: Router) {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1.nogOnChanges called');
  }
  ngOnInit(): void {
    console.log('2.ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('3.ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('4.ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('5.ngAfterContentChanged called');
  }
  ngAfterViewInit(): void {
    console.log('6.ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('7.ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('8.ngOnDestroyCalled');
  }

  click() {
    this.router.navigate(['demo']);
  }
  isClicked: boolean = false;
  perform() {
    this.isClicked = true;
  }
}
