import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { CarouselModule } from './components/carousel/carousel.module';

// Pages
import { KeyboardComponent } from './pages/keyboard/keyboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'keyboard', component: KeyboardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CarouselModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
