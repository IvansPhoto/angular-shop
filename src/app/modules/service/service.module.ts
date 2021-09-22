import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualsListComponent } from './manuals-list/manuals-list.component';
import { ManualViewComponent } from './manual-view/manual-view.component';
import { ServiceRoutingModule } from "./service-routing.module";



@NgModule({
  declarations: [
    ManualsListComponent,
    ManualViewComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
