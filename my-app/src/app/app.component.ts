import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  implements OnInit
{
  currentClasses={};
  currentStyles={};

  ngOnInit()
  {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses()
  {
    this.currentClasses = {
    saveable: true,
    modified: false,
    special: true
    }
  }
  setCurrentStyles()
  {
    this.currentStyles = {
      'font-style': 'italic',
      'font-weight': 'bold'
    }
  }
}
