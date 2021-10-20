import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'




import {ROUTES} from './app.routers';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { HomeComponent } from './components/home/home.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule} from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EditproviderComponent } from './components/editprovider/editprovider.component';
import { FormsModule } from '@angular/forms';
import { NewproviderComponent } from './components/newprovider/newprovider.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { StocksproductsComponent } from './components/stocksproducts/stocksproducts.component';
import { AuthInterceptor } from './interceptor/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    HomeComponent,
    ConfigurationComponent,
    LoginComponent,
    NavbarComponent,
    EditproviderComponent,
    NewproviderComponent,
    StocksComponent,
    StocksproductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
