import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Router Module
import { AppRoutingModule } from './app-routing.module';

import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    NavbarMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHideOnScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
