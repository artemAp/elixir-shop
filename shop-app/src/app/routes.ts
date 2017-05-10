import {Home} from './pages/home/home.component';
import {Contact} from './pages/contact/contact.component';
import {Cart} from './pages/cart/cart.component';
import {Checkout} from './pages/checkout/checkout.component';
import {ComingSoon} from './pages/coming-soon/comming-soont.component';

export const appRoutes = [
  {
    path: 'home',
    title: 'Home',
    component: Home
  },
  {
    path: 'contact',
    title: 'Contact',
    component: Contact
  },
  {
    path: 'cart',
    title: 'Cart',
    component: Cart
  },
  {
    path: 'checkout',
    title: 'Checkout',
    component: Checkout
  },
  {
    path: 'coming-soon',
    title: 'ComingSoon',
    component: ComingSoon
  }
];
