import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./Components/home/home.component";
import {GastosListComponent} from "./Components/gastos-list/gastos-list.component";
import {CreateGastoComponent} from "./Components/create-gasto/create-gasto.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'payment', component: GastosListComponent},
  {path: 'create', component: CreateGastoComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
