import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './extras/intro.component';
import { InfiniteScrollComponent } from './extras/infinite-scroll.component';
import { LandingCoverComponent } from './extras/landing-cover.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'scroll', component: InfiniteScrollComponent },
  { path: 'cover', component: LandingCoverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
