import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionData: any;
  readioSelected:any;
  readioSelected1:any;
  readioSelected2:any;
  
  showreview1:boolean=false;
  showreview2:boolean=false;
  showreview3:boolean=false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>("assets/questions.json").subscribe((data) =>
        this.questionData = data
        )
  }
  
  showReview(){
    this.showreview1=this.readioSelected;
    this.showreview2=this.readioSelected1;
    this.showreview3=this.readioSelected2;
  }

}
