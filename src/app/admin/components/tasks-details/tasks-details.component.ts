import { Component, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss']
})
export class TasksDetailsComponent  implements OnChanges{
  fullScreen:boolean = false;
  currentDate:Date;
  monthThis:string | undefined ;

  constructor() {
    this.currentDate = new Date();
    this.monthThis = new Date().toDateString();

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change It');

  }

  getPrevious() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.monthThis = this.currentDate.toDateString();
      console.log(this.currentDate);
  }

  getNext() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.monthThis = this.currentDate.toDateString();
      console.log(this.currentDate);
  }

}
