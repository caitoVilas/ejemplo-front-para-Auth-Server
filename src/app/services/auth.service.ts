import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token_url = enviroment.token_url;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getToken(code: string): Observable<any>{
    let body = new URLSearchParams();
    body.set('grant_type', enviroment.grant_type);
    body.set('client_id', enviroment.client_id);
    body.set('redirect_uri', enviroment.redirect_uri);
    //body.set('scope', enviroment.scope);
    body.set('code_verifier', enviroment.code_verifier);
    body.set('code', code);
    const basic_auth = 'Basic ' + btoa('client_secret');
    const headers_object = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Authorization': basic_auth
    });
    const httpOptions = {headers: headers_object}
    return this.httpClient.post<any>(this.token_url, body, httpOptions);
  }
}
