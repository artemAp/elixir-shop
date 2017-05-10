import {Component} from '@angular/core';
import {appRoutes} from '../../routes';

@Component({
  selector: 'main-nav',
  templateUrl: './navigation.component.html'
})
export class Navigation {

  routes: any;

  constructor() {
    this.routes = appRoutes;
  }
}
