import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  implements OnInit
{
  isActive = true;
  ngOnInit()
  {
  }
  items = [
    { name:"Sam" },
    { name:"Cortez" },
    { name:"Jack" }
  ]

  people = { name:"Shayan" }
}
