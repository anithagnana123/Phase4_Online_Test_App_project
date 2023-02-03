import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService: any;

  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {

    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  
  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.errorMessage;
    // console.log(error.error.errorMessage);
  }

}
