import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro.component';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { LandingCoverComponent } from './landing-cover.component';

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
