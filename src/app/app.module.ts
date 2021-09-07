import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PayrolListComponent } from './payrol-list/payrol-list.component';
import { PayrolItemComponent } from './payrol-item/payrol-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PayrolListComponent,
    PayrolItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
