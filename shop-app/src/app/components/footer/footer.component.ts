import { Component } from '@angular/core';
import { appRoutes } from '../../routes';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class Navigation {

    routes: any;

    constructor() {
        this.routes = appRoutes;
    }
}
