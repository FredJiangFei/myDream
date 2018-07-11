import { Router } from '@angular/router';
import { AuthService } from './common/services/auth.service';
import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthService,
    private router: Router,
    public translate: TranslateService) {
      this.setTranslate();
  }

  setTranslate() {
    this.translate.addLangs(['zh', 'en']);
    this.translate.use('en');
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
