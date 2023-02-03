import { Injectable } from '@angular/core';

export class Welcome {
  constructor ( public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }

}
