import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  implements OnInit
{
  currentClasses={};

  ngOnInit()
  {
    this.setCurrentClasses();
  }

  setCurrentClasses()
  {
    this.currentClasses = {
    saveable: true,
    modified: false,
    special: true
    }
  }
}
