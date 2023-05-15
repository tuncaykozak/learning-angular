import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JwtClientService {
  constructor(private http: HttpClient) {}

  public generateToken(request: any) {
    return this.http.post<string>(
      'http://localhost:9192/authenticate',
      request,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  public welcome(token: any) {
    let tokenString = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenString);

    // return this.http.get<string>('http://localhost:9192/test', {
    return this.http.get<string>('http://localhost:9192/', {
      headers,
      responseType: 'text' as 'json',
    });
  }
}
