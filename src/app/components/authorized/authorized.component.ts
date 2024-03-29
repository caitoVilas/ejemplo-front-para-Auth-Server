import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit} from '@angular/core'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit{

  code = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.code = data['code'];
      this.getToken();
      console.log(data)
    });
  }

  getToken(): void{
    this.authService.getToken(this.code).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      }
    );
  }

}
