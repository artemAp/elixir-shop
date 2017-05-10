import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Components
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { Navigation } from './components/navigation/navigation.component';
import { CartInformer } from './components/cart-informer/cart-informer.component';
import { AccountNavigation } from './components/account-navigation/account-navigation.component';
import { SocialBtn } from './components/social-btn/social-btn.component';
import { Search } from './components/search/search.component';

// Pages
import { Home } from './pages/home/home.component';
import { Contact } from './pages/contact/contact.component';
import { Cart } from './pages/cart/cart.component';
import { Checkout } from './pages/checkout/checkout.component';

import { appRoutes } from './routes';
import { ComingSoon } from './pages/coming-soon/comming-soont.component';
import { Subscribe } from './components/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Contact,
    Cart,
    Checkout,
    Header,
    Footer,
    Navigation,
    ComingSoon,
    CartInformer,
    AccountNavigation,
    SocialBtn,
    Search,
    Subscribe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
