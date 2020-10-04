import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
