import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App } from './app.footer/app.footer.component';
import { App } from './app.nav/app.nav.component';

@NgModule({
  declarations: [
    AppComponent,
    App.FooterComponent,
    App.NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
