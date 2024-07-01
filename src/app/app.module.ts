import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { AddNewPropertyComponent } from './admin/components/add-new-property/add-new-property.component';

@NgModule({
  declarations: [
    AppComponent,

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
    CalendarModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
=======
    HttpClientModule
>>>>>>> bd57c4928c9b76f39f2a6b7b1b68c4aa8731a43c
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorInterceptor,multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
