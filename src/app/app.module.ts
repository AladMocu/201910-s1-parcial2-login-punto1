import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {HeroesModule} from "./heroes/heroes.module";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, HeroesModule],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
