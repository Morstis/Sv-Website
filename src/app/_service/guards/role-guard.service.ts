import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    switch (state.url) {
      // Überprüfugn der Rollen abhänging von der Url | Möglicherweise auslagerbar
      case '/admin':
        if (this.auth.getUser().role !== 'ADMIN') {
          this.router.navigateByUrl('/start');
        }
        break;

      default:
        // unnötige doppelte Absicherung
        if (this.auth.getUser().role !== 'SCHÜLER') {
          this.router.navigateByUrl('/login');
        }
        break;
    }
    return true;
  }
}
