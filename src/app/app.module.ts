import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { BodyComponent } from './components/body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BodyComponent,
    AboutMeComponent,
    PortfolioComponent,
    ResumeComponent,
    HeaderComponent,
    SideNavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
