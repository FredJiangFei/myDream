import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    private userLogin = false;

   public login(){
        this.userLogin = true;
    }

    logout(){
        this.userLogin = false;
    }

    isLogin(){
        return this.userLogin;
    }
}