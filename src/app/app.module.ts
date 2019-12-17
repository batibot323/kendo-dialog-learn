import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule, WindowModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AppComponent } from './app.component';
import { DialogsComponent } from './dialogs/dialogs.component';

@NgModule({
  bootstrap:    [AppComponent],
  declarations: [AppComponent, DialogsComponent],
  imports:      [BrowserModule, BrowserAnimationsModule, DialogModule, ButtonsModule, WindowModule]
})
export class AppModule { }
