import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NaturalComponent } from './natural/natural.component';
import { CloseComponent } from './close/close.component';
import { CityComponent } from './city/city.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RuralComponent } from './rural/rural.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlowerComponent } from './flower/flower.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaturalComponent,
    CloseComponent,
    CityComponent,
    NavComponent,
    HeroComponent,
    NotfoundComponent,
    RuralComponent,
    DetailviewComponent,
    FlowerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
