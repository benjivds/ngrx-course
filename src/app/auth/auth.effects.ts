import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { filter } from "minimatch";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";

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
    {dispatch: false}
    // to make not a dispatch when the login action else it will
    // dispatch other event of login
  );

  constructor(private actions$: Actions) {
    // login$.subscribe();
    /*  actions$.subscribe(action => {
        if(action.type === '[Login Page] User Login'){
          localStorage.setItem('user',JSON.stringify(action["user"]));
        }
      });*/
  }
}
