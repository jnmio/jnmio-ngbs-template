import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';

import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
