import { Component } from '@angular/core';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  dateEntry: Date | undefined;
  exitEntry: Date | undefined;

  // constructor(private messageService: MessageService) {}

  showSuccess() {
    // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
}
