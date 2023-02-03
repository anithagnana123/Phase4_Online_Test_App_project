import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './service/route-guard.service';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReadJsonFileUsingHttpclientComponent } from './read-json-file-using-httpclient/read-json-file-using-httpclient.component';
import { SubmitComponent } from './submit/submit.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path: 'welcome/:name',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'quiz',component: QuizComponent,  canActivate:[RouteGuardService]},
  {path: 'submit',component: SubmitComponent,  canActivate:[RouteGuardService]},
  {path: 'readfile',component:  ReadJsonFileUsingHttpclientComponent,  canActivate:[RouteGuardService]},
  {path: 'logout',component: LogoutComponent,  canActivate:[RouteGuardService]},
  {path: '**',component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
