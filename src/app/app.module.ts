import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CatalogModule } from "./modules/catalog/catalog.module";
import { ServiceModule } from "./modules/service/service.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CatalogModule,
    ServiceModule,
    DashboardModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
