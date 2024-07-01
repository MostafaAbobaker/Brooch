import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { AdminModule } from '../admin/admin.module';
import { AddNewPropertyComponent } from '../admin/components/add-new-property/add-new-property.component';
import { AddNewReservationComponent } from './add-new-reservation/add-new-reservation.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    LoadingComponent,
    AddNewReservationComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    LoadingComponent,


  ]
})
export class SharedModule { }
