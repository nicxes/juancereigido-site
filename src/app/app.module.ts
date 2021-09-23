import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Router Module
import { AppRoutingModule } from './app-routing.module';

import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { LoadingComponent } from './components/loading/loading.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    NavbarMobileComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHideOnScrollModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
