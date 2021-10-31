import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Cloudinary
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';

// NGX Hide on scroll
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

// Lottie Module
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Pages
import { KeyboardComponent } from './pages/keyboard/keyboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HolovoxComponent } from './pages/holovox/holovox.component';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DownloadComponent } from './components/download/download.component';
import { PickaboxComponent } from './pages/pickabox/pickabox.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

// Routes
const routes: Routes = [
  { path: '', redirectTo: '/keyboard', pathMatch: 'full' },
  { path: 'keyboard', component: KeyboardComponent },
  { path: 'holovox', component: HolovoxComponent },
  { path: 'pickabox', component: PickaboxComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    NavbarMobileComponent,
    LoadingComponent,
    DownloadComponent,
    PickaboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgxHideOnScrollModule,
    LottieModule.forRoot({ player: playerFactory }),
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'mycloudname'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
