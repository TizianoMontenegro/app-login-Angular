import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginGuard implements CanActivate{
    constructor(
        private loginService: LoginService,
        private router: Router
    ) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.loginService.isUserLoged()) return true;
        else {
            this.router.navigate(["/login"]);
            return false;
        };
    };
}