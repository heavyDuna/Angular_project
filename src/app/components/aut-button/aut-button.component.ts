import { Component, OnInit } from '@angular/core';

import { SocialAuthService, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-aut-button',
  templateUrl: './aut-button.component.html',
  styleUrls: ['./aut-button.component.css']
})
export class AutButtonComponent implements OnInit {

user:any;

constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {

  }

  login():void {
    //platform = GoogleLoginProvider.PROVIDER_ID;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }

  logout():void {
    //platform = GoogleLoginProvider.PROVIDER_ID;
    this.authService.signOut();

  }

}
