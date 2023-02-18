import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from './log.service';
import { Pet } from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  implements OnInit
{

  species=["fish", "dog", "cat"];
  model = new Pet(1, "Sam", this.species[0]);
  submitted = false;

  onSubmit():void
  {
    this.submitted = true;
  }

  ngOnInit(): void 
  {
  }  
}
