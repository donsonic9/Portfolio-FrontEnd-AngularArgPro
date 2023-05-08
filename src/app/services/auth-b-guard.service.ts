import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthBGuardService {

  constructor(private auth:AuthService, private router:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Add your logic to check if the user is logged in and allowed to access the route

    if (this.auth.isUserLoggedInWithGoogle()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
