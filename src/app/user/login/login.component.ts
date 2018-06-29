import { AuthService } from './../../common/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user-model';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
  }

  public forgetPwd() {
    console.log('wait...');
  }

  login(){
      this.authService.login();
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/']);
  }
}
