import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { InfiniteScrollComponent } from './infinite-scroll.component';
import { LandingCoverComponent } from './landing-cover.component';
import { IntroComponent } from './intro.component';
import { ModalpopupComponent } from './modalpopup.component';
import { PagesComponent } from '../pages/pages.component';
import { NavbarComponent } from './navbar.component';

export const routes: Routes = [

  {
      path: 'extras',
      children: [
        { path: 'scroll', component: InfiniteScrollComponent },
        { path: 'cover', component: LandingCoverComponent },
        { path: 'modal', component: ModalpopupComponent },

      ]
  },
  // Not found
  //{ path: '**', redirectTo: 'extras' }

];

@NgModule({
  declarations: [
    InfiniteScrollComponent,
    LandingCoverComponent,
    IntroComponent,
    ModalpopupComponent,
    PagesComponent,
    NavbarComponent
],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExtrasModule { }
