import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    if( username === 'anitha' && password === 'something') {
        // console.log('logged in hardcoded authentication service');   
        // store the user information in session storage
        sessionStorage.setItem('authenticatorUser',username); 
        return true;  
    }
    return false;
  }

isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatorUser');
    return !( user === null)
}

logout(){
  sessionStorage.removeItem('authenticatorUser');
}


}