import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { ExtrasModule } from './extras/extras.module';
import { PagesModule } from './pages/pages.module';



import { AppRoutingModule } from './app-routing.module';
import { WildcardRoutingModule } from './wildcard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    SharedModule.forRoot(),
    LayoutModule,
    ExtrasModule,
    PagesModule,
    WildcardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
