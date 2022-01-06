import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  endpoint = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }

  posts(): Observable<any> {
    return this.http.get(this.endpoint + 'posts/').pipe(
      map((response) => {
       return response;
      })
    );
  }

  postsById(id:number): Observable<any> {
    return this.http.get(this.endpoint + `posts/${id}`).pipe(
      map((response) => {
       return response;
      })
    );
  }

  photos(): Observable<any> {
    return this.http.get(this.endpoint + 'photos/').pipe(map((response) => {
      return response;
    }))
  }

  photoById(id:number): Observable<any> {
    return this.http.get(this.endpoint + `photos/${id}`).pipe(
      map((response) => {
       return response;
      })
    );
  }

  albums(): Observable<any> {
    return this.http.get(this.endpoint + 'albums/').pipe(map((response) => {
      return response;
    }));
  }

  albumById(id:number): Observable<any> {
    return this.http.get(this.endpoint + `albums/${id}`).pipe(
      map((response) => {
       return response;
      })
    );
  }

  users():Observable<any> {
    return this.http.get(this.endpoint + 'users/').pipe(map((response) => {
      return response;
    }));
  }

  userById(id:number):Observable<any> {
    return this.http.get(this.endpoint + `users/${id}`).pipe(map((response) => {
      return response;
    }));
  }
}
