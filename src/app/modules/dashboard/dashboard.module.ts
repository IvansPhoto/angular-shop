import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";


@NgModule({
  declarations: [
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
