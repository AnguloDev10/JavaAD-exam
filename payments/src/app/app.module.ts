import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Main } from './main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { GastosListComponent } from './Components/gastos-list/gastos-list.component';
import { CreateGastoComponent } from './Components/create-gasto/create-gasto.component';


@NgModule({
  declarations: [
    Main,
    HomeComponent,
    GastosListComponent,
    CreateGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [Main]
})
export class AppModule { }
