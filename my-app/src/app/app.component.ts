import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent  implements OnInit
{
  constructor(private logService:LogService,
    private renderer:Renderer2,
    private host:ElementRef
    )
  {

  }

  ngOnInit(): void 
  {
    this.logService.logMessage("Aol");  
    this.renderer.setStyle(this.host.nativeElement, "color", "red");  
  }  
}
