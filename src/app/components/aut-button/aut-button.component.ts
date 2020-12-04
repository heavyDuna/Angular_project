import { Component, OnInit } from '@angular/core';

import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-aut-button',
  templateUrl: './aut-button.component.html',
  styleUrls: ['./aut-button.component.css']
})
export class AutButtonComponent implements OnInit {

  loggedIn: boolean = false;

constructor(private authService: SocialAuthService) { }

  image:any = "https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg";

  ngOnInit(): void {

  }

  login():void {

    if( this.loggedIn  ) {
      this.logout();
    } else {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response) => {
        this.loggedIn = true;
        this.image = response.photoUrl;
      });
    }
  }

  logout():void {

    this.authService.signOut();
    this.loggedIn = false;
    this.image = "https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg";
  }
}
