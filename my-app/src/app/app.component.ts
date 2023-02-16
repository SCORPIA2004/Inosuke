import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

  export class AppComponent {
    title = "Sam";

    getMin(a: number,b: number): number
    {
      if(a < b)
        return a;
      return b;
    }
}
