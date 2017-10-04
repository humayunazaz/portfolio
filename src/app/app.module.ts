import { ContactService } from './services/contact.service';
import { TestimonialService } from './services/testimonial.service';
import { PortfolioService } from './services/portfolio.service';
import { ServiceService } from './services/service.service';
import { HeaderService } from './services/header.service';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServicesComponent } from './home/services/services.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    HeaderService,
    ServiceService,
    PortfolioService,
    TestimonialService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
