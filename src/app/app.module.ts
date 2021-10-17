import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DownloadComponent } from './components/download/download.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

// Routes
const routes: Routes = [
  { path: '', redirectTo: '/keyboard', pathMatch: 'full' },
  { path: 'keyboard', component: KeyboardComponent },
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
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxHideOnScrollModule,
    LottieModule.forRoot({ player: playerFactory }),
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'mycloudname'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
