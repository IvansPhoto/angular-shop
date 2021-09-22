import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProdutListComponent} from "./produt-list/produt-list.component";
import {ProdutViewComponent} from "./produt-view/produt-view.component";

const routes: Routes = [
  {path: "catalog", component: ProdutListComponent},
  {path: "product", component: ProdutViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
