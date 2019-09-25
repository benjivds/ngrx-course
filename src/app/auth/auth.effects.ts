import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { filter } from "minimatch";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action => {
        localStorage.setItem('user', JSON.stringify(action.user));
      })
    )
    ,
    { dispatch: false }
    // to make not a dispatch when the login action else it will
    // dispatch other event of login
  );

 logout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.logout),
        tap(action => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');

        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {
    // login$.subscribe();
    /*  actions$.subscribe(action => {
        if(action.type === '[Login Page] User Login'){
          localStorage.setItem('user',JSON.stringify(action["user"]));
        }
      });*/
  }
}
