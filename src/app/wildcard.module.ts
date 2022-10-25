import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound.component';

@NgModule({
  imports: [
      RouterModule.forChild([
          {
              path: '**',
              component: NotfoundComponent
          }
      ])
  ],
  declarations: [
    NotfoundComponent
  ],
  exports: [
      RouterModule
  ]
})
export class WildcardRoutingModule { }