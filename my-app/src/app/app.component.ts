import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

  export class AppComponent {
    showText = false;

    toggleText(): void
    {
      this.showText = !this.showText;
    }
}
