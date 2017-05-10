import {Home} from './pages/home/home.component';
import {About} from './pages/about/about.component';
import {Contact} from './pages/contact/contact.component';
import {Products} from './pages/products/products.component';

export const appRoutes = [
  {
    path: 'home',
    title: 'Home',
    component: Home
  },
  {
    path: 'about',
    title: 'About',
    component: About
  },
  {
    path: 'contact',
    title: 'Contact',
    component: Contact
  },
  {
    path: 'products',
    title: 'Products',
    component: Products
  }
];
