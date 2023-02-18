import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  implements OnInit
{

  nameInput = '';
  ngOnInit(): void 
  {
  }  

  validationForm = new FormGroup({
    name: new FormControl(this.nameInput, [
      Validators.required,
      Validators.minLength(4)
    ])
  })

  get name()
  {
    return this.validationForm.get('name');
  }

  onSubmit()
  {
    console.log(this.nameInput);
  }

}
