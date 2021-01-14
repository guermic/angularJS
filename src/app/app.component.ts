import { Component } from '@angular/core';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthService } from './core/services/auth.service';
import { SessionService } from './core/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    //autre façon de faire
    /* private sessionService: SessionService,
    private router: Router */
  ) {}

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }

  //autre façon de faire
/*   signout() {
    this.router.navigate(['/auth/signin']).then(
      this.sessionService.clear();
      AuthService.user = null;
    );
  } */

}
