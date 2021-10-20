import { Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EditproviderComponent } from './components/editprovider/editprovider.component';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewproviderComponent } from './components/newprovider/newprovider.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { StocksproductsComponent } from './components/stocksproducts/stocksproducts.component';




export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'provider', component: ProvidersComponent },
    { path: 'newprovider', component: NewproviderComponent },
    { path: 'editprovider/:id', component: EditproviderComponent },
    { path: 'stocks', component: StocksComponent },
    { path: 'stocksproducts/:id', component: StocksproductsComponent },
    { path: 'configuration', component: ConfigurationComponent },
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch:'full', redirectTo:'home' },
    { path: '**', pathMatch:'full', redirectTo:'home' },
    
];