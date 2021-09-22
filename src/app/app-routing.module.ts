import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./modules/dashboard/about/about.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
