import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { ModalpopupComponent } from './modalpopup.component';
import { InfiniteScrollComponent } from './shared/infinite-scroll.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ModalpopupComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
