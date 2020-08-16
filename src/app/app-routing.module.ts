import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitComponent } from './submit/submit.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },

  {
    path: 'submit',
    component: SubmitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
