import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss']
})
export class TasksDetailsComponent  implements OnChanges{
  fullScreen:boolean = false;
  currentDate:Date;
  monthText = new Subject<Date>();


  constructor() {
    this.currentDate = new Date();
    this.monthText.next(new Date());
    this.getPrevious
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change It');

  }

  getPrevious() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    console.log(this.currentDate);

  }
}
