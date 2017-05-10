import { Component } from '@angular/core';
import { appRoutes } from '../routes';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class Navigation {

    routes: any;

    constructor() {
        this.routes = appRoutes;
    }
}
