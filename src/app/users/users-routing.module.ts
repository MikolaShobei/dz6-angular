import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/users/user-details/user-details.component';

const routes: Routes = [{
  path: 'users', component: UsersComponent, children: [{
    path: ':user_id', component: UserDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
