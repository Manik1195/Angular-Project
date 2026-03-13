import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {}
  protected readonly title = signal('smpleapp');
  url: string = '';
  click() {
    this.router.navigateByUrl(this.url);
  }
}
