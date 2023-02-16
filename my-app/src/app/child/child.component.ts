import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // @Output() messageEvent = new EventEmitter<string>();
  // @Input() childMessage: string;
  message = "Hello from the child";

  ngOnInit(): void {
  }

  // sendMessage()
  // {
  //   this.messageEvent.emit("Hello from the child");
  // }
}
