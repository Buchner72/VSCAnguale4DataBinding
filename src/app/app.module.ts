import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MutterComponent } from './mutter/mutter.component';
import { TochterComponent } from './tochter/tochter.component';

@NgModule({
  declarations: [
    AppComponent,
    MutterComponent,
    TochterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
