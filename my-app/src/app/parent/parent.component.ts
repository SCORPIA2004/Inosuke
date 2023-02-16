import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child:any;


  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      alert(this.child.message);
  }
  

  // receiveMessage(msg: string)
  // {
  //   alert(msg);
  // }
}
