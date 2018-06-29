import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGurd implements CanActivate{
    constructor (
        private router: Router,
        private authService: AuthService) {
    }

    canActivate (route, state: RouterStateSnapshot) {
        if(this.authService.isLogin()) return true;

        this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}});
        return false;
    }
}