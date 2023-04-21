import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { ContactarComponent } from './contactar/contactar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactarCustomFormComponent } from './contactar-custom-form/contactar-custom-form.component';

const appRoutes: Routes = [
  { path: 'buscar_productos', component: BuscarProductosComponent },
  { path: 'contactar', component: ContactarComponent },
  { path: 'contactar_custom_form', component: ContactarCustomFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BuscarProductosComponent,
    ContactarComponent,
    ContactarCustomFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
