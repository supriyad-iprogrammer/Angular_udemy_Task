import { Store } from '@ngrx/store';
import { Params } from '@angular/router';
import { catchError, exhaustMap, map, take, tap } from 'rxjs/operators';
import { RecipeService } from './../receipes/recipe.service';
import { Recipe } from './../receipes/receipe.modal';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { AuthServiceService } from '../auth/auth-service.service';
import * as fromApp from '../store/app.reducer';
import * as RecipeActions from '../receipes/store/recipe.action'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  error = new Subject<any>();

  constructor(private http: HttpClient, private recipeService: RecipeService,
    private authService:AuthServiceService,
    private store:Store<fromApp.AppState>) { }

  createRecipe() {
    const recipe = this.recipeService.getRecipes();
//     var headers_object = new HttpHeaders();
// headers_object.append('Content-Type', 'application/json');
// headers_object.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhiMjFkNWE1Y2U2OGM1MjNlZTc0MzI5YjQ3ZDg0NGE3YmZjODRjZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYW5ndWxhci1wcmFjdGljZS03NDQxMCIsImF1ZCI6ImFuZ3VsYXItcHJhY3RpY2UtNzQ0MTAiLCJhdXRoX3RpbWUiOjE2MjU0NjgzOTAsInVzZXJfaWQiOiJhT2toV3kzTWx6Z1huWFZhTnZjNzhRTnM3UVEyIiwic3ViIjoiYU9raFd5M01semdYblhWYU52Yzc4UU5zN1FRMiIsImlhdCI6MTYyNTQ2ODM5MCwiZXhwIjoxNjI1NDcxOTkwLCJlbWFpbCI6InN1cHJpeWFkQGlwcm9ncmFtbWVyLmNvIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic3Vwcml5YWRAaXByb2dyYW1tZXIuY28iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.QKGkvIb66btQtpPF91YxRz1GCqLKXb4zAfHZ9M48Svq-8hzY8ex3HDJRCQaCNnI4mfbnQLAAAD4IW2RomjKkBhWIKFdd26B8hUpBQb9z7u6gflatcMwMzmVMAKJnRKhUlXRV9sy2S1ICYVh8Nnzk8VZyHHqAPtNHtex88W0gGIw43hqy1Vfk3InPClzzq9Rg4NyeKAAwjaaQQCaGjIwgvwYoTULspYywaWxAj9CSzUZ3a2jG9XT21-ftYowe8KM43ateflV1RJ5ek9092_GMmclYqyFXs5yUMDp1CliUlCRFvJlsYBORqXbf4PiwBZSUjbvDwMq7zf7av5KalFBm");
// const httpOptions = {
//   headers: headers_object
// };
     this.http.put('https://angular-practice-74410-default-rtdb.firebaseio.com/recipes.json',
    recipe) .subscribe(response => {
      console.log(response);
    });
  }

  getdata() {

        return this.http.get<Recipe[]>(
          'https://angular-practice-74410-default-rtdb.firebaseio.com/recipes.json',

        ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingrediants ? recipe.ingrediants : []
          };
        });
      }),
      tap(recipes => {
        // this.recipeService.setRecipes(recipes);
        this.store.dispatch(new RecipeActions.SetRecipes(recipes))
      })
    );
  }
}
