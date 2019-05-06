import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';
import { baseURL } from './shared/baseurl';
import { ProcessHTTPMsgService } from './services/ProcessHTTPMsg.service';
import { HighlightDirective } from 'src/directives/highlight.directive';

@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      DishdetailComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      AboutComponent,
      ContactComponent,
      LoginComponent,
      HighlightDirective
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AppRoutingModule
   ],
   providers: [
      DishService,
      PromotionService,
      LeaderService,
      ProcessHTTPMsgService,
      { provide: 'BaseURL', useValue: baseURL }
   ],
   entryComponents: [
    LoginComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
