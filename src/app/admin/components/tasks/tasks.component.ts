import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [MessageService]

})
export class TasksComponent {
  dateEntry: Date | undefined;
  exitEntry: Date | undefined;

  constructor(private _messageService: MessageService) {}

   showSuccess() {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'تم حفظ المهمه ' });
  }

  showError() {


    this._messageService.add({ severity: 'error', summary: 'Error', detail: 'سيتم الغاء المهمه' });
}
}
