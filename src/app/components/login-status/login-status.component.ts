import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular'
import { OktaAuth } from '@okta/okta-auth-js'

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string = '';


  storage: Storage = sessionStorage;

  constructor(private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {

    // Subscribe to the authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        this.getUserDetails();
      }
    )
  }


  getUserDetails(){
    if(this.isAuthenticated){

      //FETCH THE LOGGED IN USER DETAILS (USER'S CLAIMS)
      //
      //USER FULL NAME IS EXPOSED AS A PROPERTY NAME
      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;
          this.userFullName.split(" ")

          // retrieve the user's email from authentication response
          const theEmail = res.email;

          //now store the email in browser storage
          this.storage.setItem('userEmail', JSON.stringify(theEmail));


        }
      )
    }
  }

  logout(){
    //TERMINATES THE SESSION WITH OKTA AND REMOVES CURRENT TOKENS. 
    this.oktaAuth.signOut();
  }


}
