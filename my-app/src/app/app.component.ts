import { Component } from '@angular/core';
import { ItemDetailsComponent } from './item-details/item-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

  export class AppComponent {
    deleteItem(item: string)
    {
      console.log(item);
    }
}
