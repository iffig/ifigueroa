import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioItemComponent,
    PortfolioComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
