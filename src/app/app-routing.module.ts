import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitComponent } from './submit/submit.component';
import { MainComponent } from './main/main.component';
import { LoginComponent} from './login/login.component'
import { AdminView } from './adminView/adminView.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },

  {
    path: 'submit',
    component: SubmitComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminView
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
