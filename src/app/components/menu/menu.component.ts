import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { enviroment } from 'src/enviroments/enviroments';
import { HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  authorize_uri = enviroment.authorize_uri;
  params: any = {
    client_id: enviroment.client_id,
    redirect_uri: enviroment.redirect_uri,
    scope: enviroment.scope,
    response_type: enviroment.response_type,
    response_mode: enviroment.response_mode,
    code_challenge_method: enviroment.code_challenge_method,
    code_challenge: enviroment.code_challenge,
  }

  constructor(
    private router: Router
  ) {}
  onLogin(): void {
    const httpParams = new HttpParams({fromObject: this.params})
    const codeUrl = this.authorize_uri + httpParams.toString();
    location.href = codeUrl;
  }
}
