import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/layout/admin.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RealDetailsComponent } from './components/real-details/real-details.component';
import { TechnicalSupportComponent } from './components/technical-support/technical-support.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { InformationPanelComponent } from './components/information-panel/information-panel.component';
import { ErrorsModule } from '../errors/errors.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TasksDetailsComponent } from './components/tasks-details/tasks-details.component';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AddNewPropertyComponent } from './components/add-new-property/add-new-property.component';
import { EditNewReservationComponent } from './components/edit-new-reservation/edit-new-reservation.component';

@NgModule({
  declarations: [
    AdminComponent,
    InformationPanelComponent,
    RealEstateComponent,
    TasksComponent,
    TechnicalSupportComponent,
    RealDetailsComponent,
    TasksDetailsComponent,
    AddNewPropertyComponent,
    EditNewReservationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    TagModule,
    ButtonModule,
    SharedModule,
    RouterModule,
    ErrorsModule,
    FullCalendarModule,
    ToastModule,
    CalendarModule,
    FormsModule,
  ]
})
export class AdminModule { }
