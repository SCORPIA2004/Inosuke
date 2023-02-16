import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

  export class AppComponent {
    title = "Sam";

  // intervalSub: any;

  // ngOnInit(): void 
  // {
  //   this.intervalSub = setInterval(() => {
  //     console.log("Checking onInit");
  //   }, 1000);
  // }
  
  // ngOnDestroy():void
  // {
  //   if(this.intervalSub)
  //   {
  //     clearInterval(this.intervalSub);
  //   }
  // }
}
