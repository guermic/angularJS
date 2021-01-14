import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './entities/user';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.authService.me().pipe(

      //on regarde si on a une erreur de permission et on retourne le status de la requête
      catchError((response: Response) => {

        let status = 500

        if(response.status === 401 || response.status === 403) {
          status = response.status
        }
        return of( {status} );
      }),

      
      map((response: Response | User) => {

        //on retourne true ou false en fonction du status (et donc de la permission)
        if ('status' in response) {
          if (response.status === 401 || response.status === 403) {

            this.router.navigate(['auth/signin']);
            return false;
          }
          return true;
        } 
        //on vérifie que l'utilisateur est admin dans le cas ou le router est dédié à des admin
        else if ('roles' in response) {

          if ((!response.roles.includes('ROLE_ADMIN')) && ('admin' in next.data) ) {

            this.router.navigate(['auth/signin']);
            return false;
          }
          return true;

        }

      })
    );

  }
  
}
