import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath:string = "https://api.themoviedb.org/3/";
  private keyApi:string ="?api_key=48ede91d5c0ed291aba668699788de8d";
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getPopularMovies(){
    return this.http.get(this.baseApiPath + "movie/popular" + this.keyApi);
  }

}
