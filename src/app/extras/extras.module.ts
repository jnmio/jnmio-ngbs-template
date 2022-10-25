import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { InfiniteScrollComponent } from './infinite-scroll.component';
import { LandingCoverComponent } from './landing-cover.component';

import { IntroComponent } from './intro.component';
import { ModalpopupComponent } from './modalpopup.component';
import { PagesComponent } from '../pages/pages.component';


// const routes: Routes = [
//   { path: 'scroll', component: InfiniteScrollComponent },
//   { path: 'cover', component: LandingCoverComponent },
// ];

export const routes: Routes = [

  {
      path: 'extras',
      children: [
        { path: 'scroll', component: InfiniteScrollComponent },
        { path: 'cover', component: LandingCoverComponent },
          //{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
          //{ path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
          //{ path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
          //{ path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
          //{ path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
          //{ path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
          //{ path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
          //{ path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
          //{ path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
          //{ path: 'extras', loadChildren: () => import('./extras/extras.module').then(m => m.ExtrasModule) }
      ]
  },

  // Not lazy-loaded routes
  //{ path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
  //{ path: 'recover', component: RecoverComponent },
  //{ path: 'lock', component: LockComponent },
  //{ path: 'maintenance', component: MaintenanceComponent },
  //{ path: '404', component: Error404Component },
  //{ path: '500', component: Error500Component },

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
],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExtrasModule { }
