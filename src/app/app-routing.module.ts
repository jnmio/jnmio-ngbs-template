import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro.component';
import { InfiniteScrollComponent } from './shared/infinite-scroll.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'scroll', component: InfiniteScrollComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
