import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './shared/interceptor/http-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FullCalendarModule,
    ToastModule,
    CalendarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorInterceptor,multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
