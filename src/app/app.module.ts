import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactarComponent } from './contactar/contactar.component';

const appRoutes:Routes =
[
  {path: 'buscar_productos', component:BuscarProductosComponent},
  {path: 'contactar', component:ContactarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BuscarProductosComponent,
    ContactarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
