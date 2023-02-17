import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-app-sizer',
  templateUrl: './app-sizer.component.html',
  styleUrls: ['./app-sizer.component.scss']
})
export class AppSizerComponent implements OnInit, OnDestroy {

  @Input() size:number;
  @Output() sizeChange = new EventEmitter<number>();

  constructor(){

  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

  dec()
  {
    this.resize(-1);
  }
  inc()
  {
    this.resize(+1);
  }
  reset()
  {
    this.size = 16;
  }

  resize(change: number)
  {
    if((this.size + change) <= 40 && (this.size + change) >= 8)
      this.size = this.size + change;
    this.sizeChange.emit(this.size);
  }
}
